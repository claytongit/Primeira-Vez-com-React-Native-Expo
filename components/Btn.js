import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Vibration, Alert} from 'react-native';

const Duration = 10;
const Pattern = [100, 1000];

function acao(){
  Alert.alert('Você escolheu vibrar');
  Vibration.vibrate(Duration);
  Vibration.vibrate(Pattern);
  Vibration.vibrate(Pattern, true);
}

export default function Btn() {
  return (
        <TouchableOpacity onPress={acao} style={styles.button}>
            <Text style={styles.textButton}>Clique para vibrar</Text>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    borderColor: '#09ff00',
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 40,
  },
  textButton: {
      color: '#09ff00',
      fontSize: 25,
  },
});