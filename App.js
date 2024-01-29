import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Modal } from 'react-native';
import InputForm from './components/InputForm';
import GameScreen from './components/GameScreen'; 
import FinalScreen from './components/FinalScreen';

export default function App() {
  const [name, setName] = useState(""); 
  const [number, setNumber] = useState(""); 
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isGameScreenVisible, setIsGameScreenVisible] = useState(false);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [correctNumber] = useState(1021);
  const [gameOver, setGameOver] = useState(false);

  function inputHandler(receivedName, receivedNumber){
    setName(receivedName);
    setNumber(receivedNumber);
    setIsModalVisible(false); // Hide input form
    setIsGameScreenVisible(true); // Show game screen
  }

  function handleGuess() { 
    setAttemptsLeft(attemptsLeft - 1);
    setIsGameScreenVisible(false);
    setIsModalVisible(true);
  }

  function resetGame() {
    setGameOver(false);
    setAttemptsLeft(2);
    setIsGameScreenVisible(false);
    setIsModalVisible(true);
  }

  function showFinalScreen(){
    console.log("showFinalScreen called");
    setGameOver(true);
    setIsGameScreenVisible(false);
    setIsModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
        transparent={true}
      >
        <InputForm inputHandler={inputHandler} dismissModal={() => setIsModalVisible(false)}/>
      </Modal>

      {isGameScreenVisible && !gameOver && (
        <GameScreen
          visible={isGameScreenVisible}
          userName={name}
          userGuess={number}
          attemptsLeft={attemptsLeft}
          onGuess={handleGuess}
          showFinalScreen={showFinalScreen}
          correctNumber={correctNumber}
        />
      )}

      {gameOver && (
        <FinalScreen
          userGuess={number}
          onRestart={resetGame}
          correctNumber={correctNumber}
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
