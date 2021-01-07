import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles'

export default function CardItem () {
  return (
    <View style={styles.storesContainer}>
      <ImageBackground
        source={require('../../assets/images/targetLogo.png')}
        style={styles.image}
      />

      <View style={styles.storeTitles}>
        <Text style={styles.storeTitle}>Target</Text>
        <Text style={styles.storeSubTitle}>Something for everyone</Text>
      </View>
    </View>
  );
};
