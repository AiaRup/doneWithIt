import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import { View } from 'react-native';

export default function App() {
  const netInfo = useNetInfo();

  return netInfo.isInternetReachable ? (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  ) : (
    <View></View>
  );
}
