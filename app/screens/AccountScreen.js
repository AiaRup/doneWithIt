import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { ListItem, Screen, Icon, ListItemSeperator } from '../components';
import colors from '../config/colors';
import routes from '../navigation/routes';
import useAuth from '../auth/useAuth';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
    targetScreen: routes.LISTING,
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];
export const AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={user.providerData[0].photoURL}
          avatar={user.providerData[0].displayName}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(manuItem) => manuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        ></FlatList>
      </View>
      <ListItem
        title='Log Out'
        IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
        onPress={() => logOut()}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
