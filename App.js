import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import InputForm from './components/InputForm';

export default function App() {
  const [name, setName] = useState(""); // State for name
  const [number, setNumber] = useState(""); // State for number

  function receiveInput(receivedName, receivedNumber){
    console.log("Received name:", receivedName, "and number:", receivedNumber);
    setName(receivedName);
    setNumber(receivedNumber);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
      <StatusBar style="auto" />
      <Header />
      </View>
      <View style={styles.inputView}>
      <InputForm inputHandler={receiveInput} />
      {/* Display the received name and number */}
      <Text>Name: {name}</Text>
      <Text>Number: {number}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerView:{
    flex: 1,
  },
  inputView:{
    flex: 5,
    backgroundColor: 'grey',
  }
});
