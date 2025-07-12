import { Text, View, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";
import Starting from "@/screens/starting";
import GameScreen from "@/screens/gamescreen";

export default function Index() {
 const [confirmnumber,makeconfirm] =  useState()

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
   {/* {confirmnumber?  <GameScreen /> :  <Starting makeconfirm={makeconfirm} /> } */}
   <GameScreen />
    </View>

  );
}
