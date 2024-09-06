import { Button, Text, View } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

function Contador() {
    const [contador, setContador] = useState(0);

    const decrementar = () => {
        setContador(prev => prev - 1);
    }
    const incrementar = () => {
        setContador(prev => prev + 1);
    }

    const reset = () => {
        setContador(0);
    }

    const random = () => {
        setContador(Math.floor(Math.random() * 100));
    }

    return (
        <View style={[styles.buttonContainer]}>
            <Text> Contador actual: {contador}</Text>
            <Button onPress={incrementar} title="Incrementar" />
            <Button onPress={decrementar} title="Decrementar" />
            <Button onPress={reset} title="Reiniciar" />
            <Button onPress={random} title="Random" />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
});

export default Contador;
