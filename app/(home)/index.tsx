import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

interface indexProps {
  text: string;

}

export default function HomeScreen() {
  const [nombre, setNombre] = useState("Javier");
  const [apellido, setApellido] = useState("Sabor");
  const [mostrarBotonGuardar, setMostrarBotonGuardar] = useState(false);
  const [mostrarImputs,setMostrarImputs] = useState(false);

  function cambiarNombre() {
    setMostrarBotonGuardar(true); // Activa el botón de "Guardar nombre"
    setMostrarImputs(true);

  }

  function guardarNombre() {
    console.log("Guardando nombre");
    setMostrarBotonGuardar(false); // Oculta el botón de "Guardar nombre" después de guardar
    setMostrarImputs(false);
  }

return (
  <View style={styles.container}>
    <Text style={styles.Indextext}>Home Screen</Text>
    <Text style={styles.Indextext}>Bienvenido {nombre} {apellido}</Text>
    <View style={styles.IndexButton}>
      <Button title="Cambiar nombre" onPress={cambiarNombre} />
      
      {mostrarImputs &&
      <View style= {styles.inputContainer}>  
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre} />
      <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido} />
      </View>
      }


      

    </View>

    {/* Mostrar botón "Guardar nombre" solo si cambiarNombre fue llamado */}
    {mostrarBotonGuardar && (
      <View style={styles.IndexButton}>
        <Button title="Guardar nombre" onPress={guardarNombre} />
      </View>
    )}
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    marginHorizontal: 30,
    marginTop: 80,
  },
  Indextext: {
    fontSize: 30,
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: "5%",
  },
  IndexButton: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 10,
    height: 120,
    width: "60%",
  
  },

  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 40,
    height: 120,
    width: "100%",
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'center',
    
  },
});
