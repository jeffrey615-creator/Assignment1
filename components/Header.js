import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({name}) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}> Guess My Number</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    color: "purple",
    fontSize: 20,
  }
});