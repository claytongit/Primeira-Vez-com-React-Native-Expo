import React from 'react';
import { StyleSheet, View,Text} from 'react-native';

import Label from './components/Label';
import Btn from './components/Btn';
import Btnn from './components/Btnn';

export default function App() {
  return (
    <View style={styles.container}>
      <Label />
      <View style={styles.View}>
        <Btn />
        <Btnn />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131c78',
    alignItems: 'center',
    paddingTop: 200,
  },

  View: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
