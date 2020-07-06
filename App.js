import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'firebase/firestore';
import 'firebase/auth';
import { FirebaseProvider } from './app/services/firebase';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import { OfflineNotice } from './app/components';

export default function App() {
  return (
    <FirebaseProvider>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </FirebaseProvider>
  );
}
