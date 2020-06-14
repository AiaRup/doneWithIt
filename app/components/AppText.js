import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles';

export const AppText = ({ children, style }) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};
