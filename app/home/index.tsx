import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

interface indexProps {
  text: string;
}

export default function HomeScreen() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");


  function cambiarNombre() {
    // console.log("Cambiando nombre");
    alert("Cambiando nombre"); ///esta entrando a la funcion pero no aparece para cambiar el nombre
    <View style={styles.IndexButton}>
    <Button title="Guardar nombre" onPress={guardarNombre} />
    </View>


  }

  function guardarNombre() {
    console.log("Guardando nombre");
    alert("Nombre guardado");
  }

  function actualizarNombre({text}: indexProps) {
    setNombre(text);
  }

  function actualizarApellido({text}: indexProps) {
    setApellido(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Indextext}>Home Screen</Text>
      <Text style={styles.Indextext}>Bienvenido {nombre} {apellido}</Text>
      <View style={styles.IndexButton}>
        <Button title="Cambiar nombre" onPress={cambiarNombre} />
  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
  },
  Indextext: {
    fontSize: 30,
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  IndexButton: {
    flexDirection: "column",
    justifyContent: "space-around",
    height: 100,
    width: "40%",
  },
});
