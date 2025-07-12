import { Text, View, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";
import Starting from "@/screens/starting";

export default function Index() {

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Starting />
    </View>

  );
}
