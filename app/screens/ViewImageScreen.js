import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={35}
        />
      </View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../assets/background.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 25,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: 'absolute',
    top: 25,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
