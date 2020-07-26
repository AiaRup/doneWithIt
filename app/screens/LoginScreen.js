import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import {
  ErrorMessage,
  Screen,
  AppForm,
  AppFormField,
  SubmitButton,
} from '../components';
import { firebaseAuth } from '../firebase/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string()
    .required()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .max(20, 'Password is too long - should be 20 chars maximum.')
    .matches(
      /^(?=.*?[0-9])(?=.*[A-Z]).{6,20}$/,
      'Password needs to have at least one uppercase letter and one number.'
    )
    .label('Password'),
});

export const LoginScreen = () => {
  const [loginFailed, setLoginFailded] = useState(false);
  const { logIn } = firebaseAuth();

  const handleSubmit = async ({ email, password }) => {
    setLoginFailded(false);
    const result = await logIn({ email, password });
    if (!result.ok) return setLoginFailded(result.error);
    setLoginFailded(false);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error={loginFailed || 'Invalid email and/or password'}
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
