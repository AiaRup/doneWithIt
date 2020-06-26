import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ListingEditScreen } from '../screens';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="ListingsEdit" component={ListingEditScreen} />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
);
