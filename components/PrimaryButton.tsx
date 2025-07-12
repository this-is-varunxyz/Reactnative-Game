import React from 'react'
import { Text, View, TextInput, Pressable } from "react-native";

function PrimaryButton(probs: any) {
    return (

        <Pressable android_ripple={{ color: 'white' }} style={{ borderColor: "white", borderWidth: 1, width: 80, height: 35, }} >
            <Text style={{ color: "white", margin: "auto" }} onPress={probs.onpress} >{probs.buttontext}</Text>
        </Pressable>
    )
}

export default PrimaryButton