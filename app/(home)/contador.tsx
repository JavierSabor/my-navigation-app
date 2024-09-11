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
        <View style={[styles.Container]}>
            <Text style = {[styles.textContador]}> Contador actual: {contador}</Text>
            <View style = {[styles.buttonContainer]}>
                <Button onPress={incrementar} title="Incrementar" />
                <Button onPress={decrementar} title="Decrementar" />
                <Button onPress={random} title="Random" />
                <Button onPress={reset} title="Reiniciar" />
                
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    textContador: {
        fontSize: 25,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,




    },
    Container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    buttonContainer: {
        flexDirection: "column",
        justifyContent: "space-around",
        height: 250,
        width: 200,
    },
});

export default Contador;
