import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Constants from 'expo-constants';

export default function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
