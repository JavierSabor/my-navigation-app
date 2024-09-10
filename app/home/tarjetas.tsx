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
	<Pressable onPress={handlePress}>
	  <Text style = {[styles.Card, isTouched && styles.CardTouched]}>
		{texto}
	  </Text>
    <Tarjeta texto="Tarjeta 1: VISA BANCO PATAGONIA"/> 
    <Tarjeta texto="Tarjeta 2: MASTERCARD BANCO GALICIA"/>
    <Tarjeta texto="Tarjeta 3: AMEX BANCO SANTANDER" />
	</Pressable>
  
  );
};


const styles = StyleSheet.create({

Card: {
    color: 'white',
    backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 18,
    padding: 40,
    margin: 10,
    width: 300,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 20,	
    },
CardTouched: {
    color: 'white',
    backgroundColor: 'black',
    }

});

export default Tarjeta; styles;