import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ListingEditScreen, AccountScreen } from '../screens';
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="ListingsEdit" component={ListingEditScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);
