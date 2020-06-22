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

import { Screen, ImageInputList } from './app/components';

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}
