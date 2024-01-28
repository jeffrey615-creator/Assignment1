import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function Input({ inputHandler, dismissModal }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [isChecked, setChecked] = useState(false);
  

  function changeNameHandler(changedName) {
    setName(changedName);
    if (changedName) setNameError(''); // Clear error when user starts typing
  }

  function changeNumberHandler(changedNumber) {
    setNumber(changedNumber);
    if (changedNumber) setNumberError(''); // Clear error when user starts typing
  }

  function isValidName(name) {
    return /^[a-zA-Z]{2,}$/.test(name);
  }

  function isValidNumber(number) {
    const num = parseInt(number, 10);
    return !isNaN(num) && num >= 1020 && num <= 1029;
  }

  function confirmHandler() {
    const isNameValid = isValidName(name);
    const isNumberValid = isValidNumber(number);
    
    if (!isNameValid || !isNumberValid) {
      if (!isNameValid) setNameError('Invalid name');
      if (!isNumberValid) setNumberError('Number must be between 1020 and 1029');
      return;
    }

    inputHandler(name, number); // Call inputHandler with valid data
  }

  function cancelHandler() {
    setName("");
    setNumber("");
    setNameError('');
    setNumberError('');
    dismissModal && dismissModal(); // Call dismissModal if it's passed as a prop
  }

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput 
        placeholder="Type something"
        style={styles.input} 
        value={name} 
        onChangeText={changeNameHandler}
      />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

      <Text>Enter a Number</Text>
      <TextInput 
        style={styles.input} 
        value={number} 
        keyboardType="numeric"
        onChangeText={changeNumberHandler}
      />
      {numberError ? <Text style={styles.errorText}>{numberError}</Text> : null}

      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}>I am not a Robot</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button title="Reset" onPress={cancelHandler} />
        <Button title="Confirm" onPress={confirmHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '100%',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "80%",
    marginVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
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
