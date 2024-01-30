import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import Card from './Card';
import { colors } from '../Styles';

const FinalScreen = ({ isWin, chosenValue, onRestart }) => {
    const imageSource = isWin 
      ? { uri: `https://picsum.photos/id/${chosenValue}/100/100` }
      : require('../assets/sad_face_image.png');

    return (
      <View style={styles.container}>
        <Card style={styles.cardContainer}>
        <Text style={styles.text}>
          Here's your picture
        </Text>
        <View style={styles.imageContainer}>
        <Image 
          source={imageSource}
          style={styles.image} 
        />
        </View>
        <Button title="Start Again" onPress={onRestart} />
        </Card>
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
    color:colors.textColor,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FinalScreen;
