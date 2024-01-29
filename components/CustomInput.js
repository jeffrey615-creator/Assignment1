import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ value, onChangeText, placeholder, style, keyboardType }) => (
  <TextInput 
    style={[styles.input, style]} 
    value={value} 
    onChangeText={onChangeText}
    placeholder={placeholder}
    keyboardType={keyboardType}
  />
);

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "80%",
    marginVertical: 10,
  },
});

export default CustomInput;
