import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles';

export const AppText = ({ children, style, ...rest }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...rest}>
      {children}
    </Text>
  );
};
