import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { FirebaseProvider, firebaseRef } from './app/services/firebase';
import AppLoading from 'expo-app-loading';
import { I18nManager } from 'react-native';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import { OfflineNotice } from './app/components';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import { navigationRef } from './app/navigation/RootNavigation';
import logger from './app/utility/logger';

logger.start();

I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    firebaseRef.auth().onAuthStateChanged((user) => {
      if (user != null) setUser(user);
    });
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={(e) => logger.log('Error app loading', e)}
      />
    );

  return (
    <FirebaseProvider>
      <AuthContext.Provider value={{ user, setUser }}>
        <OfflineNotice />
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </FirebaseProvider>
  );
}
