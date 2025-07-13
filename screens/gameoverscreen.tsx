import React from 'react'
import { SafeAreaView ,Text} from "react-native"
function GameOver({finalnumber}: any) {
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
      width: "100%"
    }}>
      <Text style={{
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 0
      }}>
        Game Over

      </Text>
      <Text style={{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10
      }}>
        The number was - {finalnumber}
        
      </Text>
    </SafeAreaView>
  )
}

export default GameOver