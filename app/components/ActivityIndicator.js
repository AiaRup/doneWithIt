import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';

export const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: colors.white,
    height: '100%',
    position: 'absolute',
    opacity: 0.8,
    width: '100%',
    zIndex: 1,
  },
});
