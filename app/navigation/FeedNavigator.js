import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ListingsScreen, ListingDetailsScreen } from '../screens';

const Stack = createStackNavigator();

export default FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Listing" component={ListingsScreen} />
    <Stack.Screen
      name="ListingDetials"
      component={ListingDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
