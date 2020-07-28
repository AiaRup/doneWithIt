import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import { ListItem, AppText, ContactSellerForm } from '../components';
import colors from '../config/colors';
import listingsApi from '../firebase/listings';
import usersApi from '../firebase/users';

export const ListingDetailsScreen = ({ route, navigation }) => {
  const [userListings, setUserListings] = useState(0);
  const { data: listingsOfCurrenUser, request: loadListings } = useFirestore(
    listingsApi.getListings
  );
  const { data: currentUser, request: getUser } = useFirestore(
    usersApi.getUserById
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadListings();
      getUser(listing.createdBy);
      // const { data: currentUser } = useFirestore(usersApi.getUserById);
      // const { data: listingsOfCurrenUser } = useFirestore(
      //   listingsApi.getListings
      // );

      // console.log({ listingsOfCurrenUser, currentUser });
    });

    return unsubscribe;
  }, [navigation]);

  const listing = route.params;

  // useEffect(() => {
  //   const getUserInfo = async () => {
  //     await loadListings();
  //     await getUser(listing.createdBy);

  //     const listingsOfUser = listingsOfCurrenUser.filter(
  //       (lis) => lis.createdBy === listing.createdBy
  //     );

  //     setUser({ ...currentUser });
  //   };

  //   getUserInfo();
  // }, [listing]);

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
        style={{ flex: 1 }}
      >
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
          uri={listing.images[0].url}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>${listing.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={currentUser.photo}
              avatar={currentUser.name}
              title={currentUser.name}
              subTitle="5 Listings"
            />
          </View>
          <ContactSellerForm listing={listing} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});
