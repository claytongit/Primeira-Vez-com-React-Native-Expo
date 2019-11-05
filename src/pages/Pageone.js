import React from 'react';
import { StyleSheet, Text} from 'react-native';



export default function Routes() {
  return (
      <Text style={styles.Text}>Ola React</Text>    
  );
}

const styles = StyleSheet.create({
  Text: {
    color: '#ccc',
  },
});