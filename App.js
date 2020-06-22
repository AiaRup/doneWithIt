import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {
  WelcomeScreen,
  ViewImageScreen,
  ListingDetailsScreen,
  MessagesScreen,
  AccountScreen,
  ListingsScreen,
  LoginScreen,
  RegisterScreen,
  ListingEditScreen,
} from './app/screens';

import { Screen } from './app/components';

export default function App() {
  useEffect(async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
  }, []);
  return <Screen></Screen>;
}
