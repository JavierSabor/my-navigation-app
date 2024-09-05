import React from "react";
import { Text, View } from "react-native";
import Contador from "./contador";
import Tarjeta from "./tarjetas";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Tarjeta texto="Tarjeta 1" />
	  <Tarjeta texto="Tarjeta 2" />
	  <Tarjeta texto="Tarjeta 3" />
    
    <Contador></Contador>
    </View>
  );
}
