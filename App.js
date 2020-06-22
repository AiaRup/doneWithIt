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

import { Screen, ImageInput } from './app/components';
import { Button, Image } from 'react-native';

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to access the library.');
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync();
      if (!cancelled) {
        setImageUri(uri);
      }
    } catch (error) {
      console.log('Error reading an image.');
    }
  };

  return (
    <Screen>
      <Button title="Select image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <ImageInput imageUri={imageUri} />
    </Screen>
  );
}
