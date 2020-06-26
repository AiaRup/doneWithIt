import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ListingsScreen, ListingDetailsScreen } from '../screens';

const Stack = createStackNavigator();

export default FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Listing"
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);
