import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import { OfflineNotice } from './app/components';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';

export default function App() {
  const [user, setUser] = useState(undefined);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
