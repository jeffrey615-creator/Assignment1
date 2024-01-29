import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Modal } from 'react-native';
import InputForm from './components/InputForm';
import GameScreen from './components/GameScreen'; 
import FinalScreen from './components/FinalScreen';

const INITIAL_ATTEMPTS = 3;
const CORRECT_NUMBER = 1021; // Change this as needed

export default function App() {
  const [name, setName] = useState(""); 
  const [number, setNumber] = useState(""); 
  const [currentScreen, setCurrentScreen] = useState('input');
  const [attemptsLeft, setAttemptsLeft] = useState(INITIAL_ATTEMPTS);
  const [isWin, setIsWin] = useState(false);

  function inputHandler(receivedName, receivedNumber){
    setName(receivedName);
    setNumber(receivedNumber);
    setCurrentScreen('game');
    if (parseInt(receivedNumber, 10) === CORRECT_NUMBER){
      setIsWin(true);
    } else {
      setIsWin(false);
    }
  }
  

  const handleGuess = (guess) => {
    if (parseInt(guess, 10) === CORRECT_NUMBER) {
      setIsWin(true);
      setCurrentScreen('final');
    } else if (attemptsLeft > 1) {
      setAttemptsLeft(prevAttempts => prevAttempts - 1);
      setCurrentScreen('input');
    } else {
      setIsWin(false);
      setCurrentScreen('final');
    }
  };

  function resetGame() {
    console.log("press reset");
    setName("");
    setNumber("");
    setIsWin(false);
    setAttemptsLeft(INITIAL_ATTEMPTS);
    setCurrentScreen('input');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {currentScreen === 'input' && (
        <Modal
          visible={true}
          animationType="slide"
          onRequestClose={() => setCurrentScreen('game')}
          transparent={true}
        >
          <InputForm inputHandler={inputHandler}/>
        </Modal>
      )}

      {currentScreen === 'game' && (
        <GameScreen
          userName={name}
          userGuess={number}
          attemptsLeft={attemptsLeft}
          isWin = {isWin}
          onGuess={handleGuess}
          showFinalScreen={() => setCurrentScreen('final')}
          correctNumber={CORRECT_NUMBER}
        />
      )}

      {currentScreen === 'final' && (
        <FinalScreen
          isWin={isWin}
          chosenValue={number}
          onRestart={resetGame}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECD4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
