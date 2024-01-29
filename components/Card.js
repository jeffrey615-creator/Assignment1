import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children }) => (
  <View style={styles.card}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default Card;
