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
    <View >
  <Pressable  style={styles.Contenedor} onPress={handlePress}>
	  <Text style = {[styles.Card, isTouched && styles.CardTouched]}>
		{texto}
	  </Text>
	</Pressable>
    </View>

  
  );
};

const ListaTarjetas = () => {
  return (
<View style={styles.Lista}>
    <Tarjeta texto="Tarjeta 1: VISA BANCO PATAGONIA" />
    <Tarjeta texto="Tarjeta 2: MASTERCARD BANCO GALICIA" />
    <Tarjeta texto="Tarjeta 3: AMEX BANCO SANTANDER" />
    <Tarjeta texto="Tarjeta 4: AMEX BANCO AMERICAN EXPRESS" />
    <Tarjeta texto="Tarjeta 5: VISA BANCO NACION" />
</View>
  );
};

const styles = StyleSheet.create({

  Lista: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },

Contenedor:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom  : 40,
    marginTop: 80,
    marginHorizontal: 30,
    

    },

    Card: {
      color: 'white',
      backgroundColor: '#5b9bd5',
      textAlign: 'center',
      fontSize: 18,
      padding: 30, 
      height: 'auto',
      minHeight: 105,
      borderWidth: 3,
      borderColor: "black",
      borderRadius: 30,
      width: "100%",
      overflow: 'hidden'
    },

CardTouched: {
    color: 'white',
    backgroundColor: '#333',
    borderColor: "#5b9bd5",
    }

});


export default ListaTarjetas; styles;