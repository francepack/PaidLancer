import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.emph}>Paid</Text>
        <Text>Lancer</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  title: {
    color: '#54DB9F',
    fontSize: 32,
    letterSpacing: 2,

  },
  emph: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
});