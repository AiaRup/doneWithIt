import React, { useState } from 'react';
import {
  WelcomeScreen,
  ViewImageScreen,
  ListingDetailsScreen,
  MessagesScreen,
  AccountScreen,
  ListingsScreen,
} from './app/screens';
import { AppTextInput, Screen, AppPicker } from './app/components';

const categories = [
  {
    label: 'Furniture',
    value: 1,
  },
  {
    label: 'Clothing',
    value: 2,
  },
  {
    label: 'Cameras',
    value: 3,
  },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // // return <ListingDetailsScreen />;
  // return <MessagesScreen />;
  // return <AccountScreen />;
  // return <ListingsScreen />;
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
  );
}
