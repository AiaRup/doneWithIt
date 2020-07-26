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
// import authApi from '../api/auth';
// import useAuth from '../auth/useAuth';
import useAuth from '../firebase/auth/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export const LoginScreen = () => {
  const auth = useAuth();
  const [loginFailed, setLoginFailded] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    // const result = await authApi.login(email, password);
    // const result = await authApi.login(email, password);
    // if (!result.ok) return setLoginFailded(true);
    // setLoginFailded(false);
    auth.logIn({ email, password });
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
          error="Invalid email and/or password"
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
