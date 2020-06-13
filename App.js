import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

export default function App() {
  // return <WelcomeScreen />;
  // return <ViewImageScreen />;
  // // return <ListingDetailsScreen />;
  // return <MessagesScreen />;
  // return <AccountScreen />;
  // return <ListingsScreen />;
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email"></AppTextInput>
    </Screen>
  );
}
