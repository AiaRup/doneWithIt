import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';

export default function ListItem({ image, title, subTitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500',
  },
});
