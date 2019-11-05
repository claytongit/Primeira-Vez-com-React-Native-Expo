import React from 'react';
import { StyleSheet ,Text} from 'react-native';


export default function Label() {
  return (
      <Text style={styles.Text}>Deseja que o celular vibre?</Text>    
  );
}

const styles = StyleSheet.create({
  Text: {
    color: '#ccc',
    fontSize: 28,
  },
});
