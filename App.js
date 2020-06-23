import React, { useEffect, useState } from 'react';
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

export default function App() {
  return <ListingEditScreen />;
}
