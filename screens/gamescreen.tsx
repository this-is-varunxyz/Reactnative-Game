import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from '@/components/PrimaryButton';


const GameScreen = () => {
  function increase() {

  }
  function decrease() {

  }
  return (
    <SafeAreaView style={{ display: "flex", justifyContent: "center", alignItems: "center" }}  >

      <View style={{ height: 70, width: "70%", marginTop: 50, borderWidth: 1, borderColor: "white" }}  >
        <Text style={{ color: "white", fontSize: 23, margin: "auto" }} > Opponent's Guess  </Text>
      </View>

      <View style={{ height: 70, width: "30%", display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: 20, borderBottomWidth: 1, borderColor: "white" }}  >
        <Text style={{ color: "white", fontSize: 40 }} >56  </Text>
      </View>
      <View style={{ marginTop: 40, display: "flex", flexDirection: "row", gap: 10, justifyContent: "space-between", width: "60%" }}>

        <PrimaryButton onpress={decrease} buttontext={"Decrease"} />

        <PrimaryButton onpress={increase} buttontext={"Increase"} />

      </View>
      <ScrollView
        style={{ width: "80%", height: "50%", marginTop: 35, borderWidth: 1, borderColor: "white" }}
        contentContainerStyle={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <View style={{ height: 40, width: "30%", padding: 0, borderBottomWidth: 1, borderColor: "white", }}  >

          <Text style={{ margin: "auto", marginBottom: 1, color: "white", fontSize: 30 }}>Logs</Text>
        </View>
        <View style={{ paddingLeft:5,paddingRight:5, height: 50, width: "90%", display: "flex",flexDirection:"row", justifyContent: "space-between",alignItems:"center",  marginTop: 50, borderWidth: 1, borderColor: "white" }}  >

          <Text style={{  color: "white", fontSize: 20 }} >
            #Log1
          </Text>
           <Text style={{ color: "white", fontSize: 20 }} >
            56
          </Text>
        </View>
      </ScrollView>


    </SafeAreaView>
  );
};

export default GameScreen;