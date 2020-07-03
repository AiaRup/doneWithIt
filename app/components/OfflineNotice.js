import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AppText } from './AppText';
import colors from '../config/colors';

export const OfflineNotice = (props) => {
  return (
    <View style={styles.container}>
      <AppText>No Internet connection</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: 'absolute',
  },
});
