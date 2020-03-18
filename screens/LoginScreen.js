import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function LoginScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.getStartedText}>
        email
      </Text>
      <TextInput
      style={styles.input}
    />
    <Text style={styles.getStartedText}>
        password
      </Text>
      <TextInput
      style={styles.input}
    />
    </ScrollView>
  );
}

LoginScreen.navigationOptions = {
  header: null,
};

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
    paddingLeft: 30,
    paddingBottom: 4,
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginBottom: 30,
  }
})