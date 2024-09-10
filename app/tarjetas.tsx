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
	  <Text style = {[styles.Pressable, isTouched && styles.PressableTouched]}>
		{texto}
	  </Text>
	</Pressable>
  );
};


const styles = StyleSheet.create({

Pressable: {
    color: 'white',
    backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 24,
    padding: 40,
    margin: 10,
    },

PressableTouched: {
    color: 'white',
    backgroundColor: 'red',
    }

});

export default Tarjeta; styles;