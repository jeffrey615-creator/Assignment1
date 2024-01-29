import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ message }) => (
  message ? <Text style={styles.errorText}>{message}</Text> : null
);

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
});

export default ErrorMessage;
