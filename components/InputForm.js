import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import CustomCheckbox from './CustomCheckbox';
import ErrorMessage from './ErrorMessage';
import Card from './Card';

export default function InputForm({ inputHandler, dismissModal }) {
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
    <Card>
      <Text>Name</Text>
      <CustomInput 
        placeholder="Type something"
        value={name} 
        onChangeText={changeNameHandler}
      />
      <ErrorMessage message={nameError} />

      <Text>Enter a Number</Text>
      <CustomInput 
        value={number} 
        keyboardType="numeric"
        onChangeText={changeNumberHandler}
      />
      <ErrorMessage message={numberError} />

      <CustomCheckbox isChecked={isChecked} setChecked={setChecked} />

      <View style={styles.buttonsContainer}>
        <CustomButton title="Reset" onPress={cancelHandler} />
        <CustomButton title="Confirm" onPress={confirmHandler} />
      </View>
    </Card>
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
