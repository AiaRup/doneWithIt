import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ListingsScreen, ListingDetailsScreen } from '../screens';
import routes from './routes';

const Stack = createStackNavigator();

export default FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.LISTING} component={ListingsScreen} />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);
