import { Button, Text, View } from "react-native";
import React, { useState } from "react";

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

    //Generame otra funcion con otro boton que al clickear se muestre un numero random
    const random = () => {
        setContador(Math.floor(Math.random() * 100));
    }
    <View style={{ marginBottom: 24 }}>
        <Button onPress={random} title="Random" />
    </View>





    return (
        <View style={{ marginBottom: 24 }}>
            <Text style={{ marginBottom: 24 }}> Contador actual: {contador}</Text>
            <View style={{ marginBottom: 24 }}>
                <Button onPress={incrementar} title="Incrementar" />
            </View>
            <View style={{ marginBottom: 24 }}>
                <Button onPress={decrementar} title="Decrementar" />
            </View>
            <View style={{ marginBottom: 24 }}>
                <Button onPress={reset} title="Reiniciar" />
            </View>
        </View>
    );
}

export default Contador;