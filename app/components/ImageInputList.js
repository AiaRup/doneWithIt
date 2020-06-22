import React from 'react';
import { StyleSheet, View } from 'react-native';

export const ImageInputList = ({ imageUris, onAddImage, onRemoveImage }) => {
  return (
    <View
      style={styles.container}
      imageUris={imageUris}
      onAddImage={onAddImage}
      onRemoveImage={onRemoveImage}
    ></View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
