import React from "react";
import { Text, View } from "react-native";
import Contador from "./(home)/contador";
import ListaTarjetas from "./(home)/tarjetas";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ListaTarjetas></ListaTarjetas>
      <Contador></Contador>

    </View>

  );
}
