import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface TarjetaProps {
  texto: string;
}

const Tarjeta = ({ texto }: TarjetaProps) => {
  const [isTouched, setIsTouched] = React.useState(false);

  const handlePress = () => {
	setIsTouched(!isTouched);
  };

  return (
  <Pressable style={styles.Contenedor} onPress={handlePress}>
	  <Text style = {[styles.Card, isTouched && styles.CardTouched]}>
		{texto}
	  </Text>
	</Pressable>
  
  );
};

const ListaTarjetas = () => {
  return (
    <>
      <Tarjeta texto="Tarjeta 1: VISA BANCO PATAGONIA" />
      <Tarjeta texto="Tarjeta 2: MASTERCARD BANCO GALICIA" />
      <Tarjeta texto="Tarjeta 3: AMEX BANCO SANTANDER" />
      <Tarjeta texto="Tarjeta 4: AMEX BANCO AMERICAN EXPRESS" />
    </>
  );
};

const styles = StyleSheet.create({

Contenedor:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom  : 40,
    marginTop: 80,
    },

Card: {
    color: 'white',
    backgroundColor: '#5b9bd5',
    textAlign: 'center',
    fontSize: 18,
    padding: "auto",
    width: "80%",
    height: 'auto',
    minHeight: 105,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 30,

    
    },
CardTouched: {
    color: 'white',
    backgroundColor: '#333',
    borderColor: "#5b9bd5",
    }

});


export default ListaTarjetas; styles;