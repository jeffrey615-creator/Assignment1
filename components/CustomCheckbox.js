import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

const CustomCheckbox = ({ isChecked, setChecked }) => (
  <View style={styles.section}>
    <Checkbox
      style={styles.checkbox}
      value={isChecked}
      onValueChange={setChecked}
      color={isChecked ? '#4630EB' : undefined}
    />
    <Text style={styles.paragraph}>I am not a Robot</Text>
  </View>
);

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});

export default CustomCheckbox;
