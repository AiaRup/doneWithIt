import React, { useEffect, useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import { ListItem, AppText, ContactSellerForm } from '../components';
import colors from '../config/colors';
import listingsApi from '../firebase/listings';

export const ListingDetailsScreen = ({ route }) => {
  const [user, setUser] = useState({});
  const { data: listingsOfCurrenUser, request: loadListings } = useFirestore(
    listingsApi.getListings
  );

  const listing = route.params;

  useEffect(() => {
    const getUserInfo = async () => {
      await loadListings();
      const listingsOfUser = listingsOfCurrenUser.filter(
        (lis) => lis.createdBy === listing.createdBy
      );

      setUser(createdBy);
    };

    getUserInfo();
  }, [listingsOfCurrenUser]);

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
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
            image={require('../assets/mosh.jpg')}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
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
