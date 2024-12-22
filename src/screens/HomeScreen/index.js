import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen! Hey there!</Text>
    </View>
  );
};

export default HomeScreen;
