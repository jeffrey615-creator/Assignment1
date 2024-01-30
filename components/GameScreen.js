import React from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';

const GameScreen = ({ visible, userName, userGuess, attemptsLeft, isWin, onGuess, showFinalScreen, correctNumber }) => {
    const isCorrectGuess = isWin;
    const guessFeedback = isCorrectGuess 
      ? "Congrats! You Won!" 
      : `Guess ${userGuess < correctNumber ? 'higher' : 'lower'}. Attempts left: ${attemptsLeft - 1}`;
  
    const guessSection = attemptsLeft > 0 ? (
      <View>
        <Text style={styles.modalText}>{guessFeedback}</Text>
        <Button title={isCorrectGuess ? "Thank you" : "I am done"} onPress={showFinalScreen} />
        {!isCorrectGuess && <Button title="Let Me Guess Again" onPress={() => onGuess(userGuess)} />}
      </View>
    ) : (
      <View>
        <Text style={styles.modalText}>Game Over! The correct number was {correctNumber}.</Text>
        <Button title="Restart Game" onPress={showFinalScreen} />
      </View>
    );
  
    return (
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello, {userName}!</Text>
            <Text style={styles.modalText}>Your guess: {userGuess}</Text>
            {guessSection}
          </View>
        </View>
      </Modal>
    );
  };
  

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default GameScreen;
