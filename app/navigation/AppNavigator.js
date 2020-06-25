import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ListingsScreen, ListingEditScreen, AccountScreen } from '../screens';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Listings" component={ListingsScreen} />
    <Tab.Screen name="ListingsEdit" component={ListingEditScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);
