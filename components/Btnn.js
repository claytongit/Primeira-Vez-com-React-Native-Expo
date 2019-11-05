import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Vibration, Alert} from 'react-native';

function acao(){
    Alert.alert('Cancelado');
    Vibration.cancel();
}

export default function Btnn() {
  return (
        <TouchableOpacity onPress={acao} style={styles.button}>
            <Text style={styles.textButton}>Cancelar</Text>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#ff0000',
    padding: 5,
    paddingHorizontal: 90,
  },
  textButton: {
      color: '#ff0000',
      fontSize: 25,
  },
});