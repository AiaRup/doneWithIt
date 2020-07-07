import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

const generateInitials = (text) => {
  const [name, lastName] = text.split(' ');
  const [first] = name;
  if (lastName) {
    const [second] = lastName;
    return `${first.toUpperCase()}${second.toUpperCase()}`;
  }
  return first.toUpperCase();
};

export const AvatarText = ({ text }) => {
  return (
    <View style={styles.container}>
      {text && (
        <Text style={styles.text} adjustsFontSizeToFit={true}>
          {generateInitials(text)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: 35,
    height: 70,
    flexDirection: 'column',
    justifyContent: 'center',
    width: 70,
  },
  text: {
    color: colors.white,
    fontSize: 70 / 3,
  },
});
