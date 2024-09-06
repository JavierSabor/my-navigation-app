import React from "react";
import { Text, View } from "react-native";
import Contador from "./home/contador";
import Tarjeta from "./home/tarjetas";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tarjeta texto="Tarjeta 1: VISA BANCO PATAGONIA"/> 
      <Tarjeta texto="Tarjeta 2: MASTERCARD BANCO GALICIA"/>
      <Tarjeta texto="Tarjeta 3: AMEX BANCO SANTANDER" />
      <Contador></Contador>

    </View>

  );
}
