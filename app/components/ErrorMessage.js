import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppText } from './AppText';

export const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});
