import React, { useState } from 'react';
import * as Yup from 'yup';
import { StyleSheet } from 'react-native';

import {
  Screen,
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
  ActivityIndicator,
} from '../components';
import logger from '../utility/logger';
import { firebaseAuth } from '../firebase/auth';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
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
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
});

export const RegisterScreen = () => {
  const [error, setError] = useState();
  const { signUp, logIn } = firebaseAuth();

  const handleSubmit = async (userInfo) => {
    const result = await signUp(userInfo);

    if (!result.ok) {
      setError(result.error);
      logger.log(result);
      return;
    }

    await logIn(userInfo);
  };

  return (
    <>
      <ActivityIndicator visible={false} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
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
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
