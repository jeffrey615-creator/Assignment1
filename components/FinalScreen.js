import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const FinalScreen = ({ isWin, chosenValue, onRestart }) => {
    const imageSource = isWin 
      ? { uri: `https://picsum.photos/id/${chosenValue}/100/100` }
      : require('../assets/sad_face_image.png');

      console.log("onRestart prop in FinalScreen:", onRestart);
  
    return (
      <View style={styles.container}>
        <Image 
          source={imageSource}
          style={styles.image} 
        />
        <Text style={styles.text}>
          {isWin ? "Congratulations! You guessed the right number." : "Better luck next time!"}
        </Text>
        <Button title="Start Again" onPress={onRestart} />
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default FinalScreen;
