import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function SearchScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.getStartedText}>
        Sample link text here
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
})