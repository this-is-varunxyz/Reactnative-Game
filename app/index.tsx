import { View } from "react-native";
import { useState } from "react";
import React from "react";
import Starting from "@/screens/starting";
import GameScreen from "@/screens/gamescreen";
import GameOver from "@/screens/gameoverscreen";


export default function Index() {

    const minRef = React.useRef(0);
    const maxRef = React.useRef(100);
  
  const [confirmnumber, makeconfirm] = useState('')
  const [isGameover, setGameover] = useState(false);
  
  const [Opponentguess, setOpponentguess] = useState(generateRandomBetween(minRef.current, maxRef.current, Number(confirmnumber)));
function generateRandomBetween(min: number, max: number, exclude: number): number {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    if (rand === exclude) {
      return generateRandomBetween(min, max, exclude);
    }
    return rand;
  }

  function increase() {
    minRef.current = Opponentguess + 1;
    setOpponentguess(generateRandomBetween(minRef.current, maxRef.current, -1));
  }
  function decrease() {
    maxRef.current = Opponentguess - 1;
    setOpponentguess(generateRandomBetween(minRef.current, maxRef.current, Opponentguess));
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      {isGameover ? (
        <GameOver finalnumber={Opponentguess}  />
      ) : (
        confirmnumber ? (
          <GameScreen confirmnumber={confirmnumber} setGameover={setGameover} increase={increase} decrease={decrease} opponentguess={Opponentguess}  />
        ) : (
          <Starting makeconfirm={makeconfirm} />
        )
      )}
    </View>
  );
}
