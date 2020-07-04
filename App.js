import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { Fuego, FuegoProvider } from '@nandorojo/swr-firestore';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import { OfflineNotice } from './app/components';
import firebaseConfig from './app/config/firebase';

const fuego = new Fuego(firebaseConfig);

export default function App() {
  return (
    <FuegoProvider fuego={fuego}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </FuegoProvider>
  );
}
