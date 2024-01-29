import React from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';

const GameScreen = ({ visible, userName, userGuess, attemptsLeft, onGuess, onReset, correctNumber }) => {
    return (
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello, {userName}!</Text>
            
            <Text style={styles.modalText}>Your have chosen {userGuess}</Text>
  
            {attemptsLeft > 0 ? (
              <View>
                <Text style={styles.modalText}>
                    {parseInt(userGuess, 10) !== correctNumber ?
                    `Guess ${userGuess < correctNumber ? 'higher' : 'lower'}. Attempts left: ${attemptsLeft - 1}` :
                    "Congrats! {userName}! You Won!"
                    }
                </Text>
                <Button title="I am done" onPress={onReset} />
                <Button title="Give Up" onPress={() => onGuess(userGuess)} />
              </View>
            ) : (
              <View>
                <Text style={styles.modalText}>Game Over! The correct number was {correctNumber}.</Text>
                <Button title="Restart Game" onPress={onReset} />
              </View>
            )}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
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
