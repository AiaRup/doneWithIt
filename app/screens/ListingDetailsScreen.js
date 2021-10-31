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
import usersApi from '../firebase/users';
import useFirestore from '../hooks/useFirestore';

export const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  const { request, data } = useFirestore(usersApi.getUserById);
  const [createdBy, setCreatedBy] = useState(null);

  const updateListingOwner = async (id) => {
    await request(id);
    if (data) {
      setCreatedBy(data);
    }
  };

  useEffect(() => {
    if (listing.createdBy) {
      updateListingOwner(listing.createdBy);
    }
  }, [listing?.createdBy]);

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        behavior='position'
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
        style={{ flex: 1 }}
      >
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint='light'
          uri={listing.images[0].url}
        />
        {createdBy && (
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.price}>${listing.price}</AppText>
            <View style={styles.userContainer}>
              <ListItem
                image={createdBy.photo}
                avatar={createdBy.name}
                title={createdBy.name}
                subTitle='5 Listings'
              />
            </View>
            <ContactSellerForm listing={listing} />
          </View>
        )}
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
