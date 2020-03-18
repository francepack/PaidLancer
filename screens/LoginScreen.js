import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function LoginScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.getStartedText}>
        Sample link text here - Login
      </Text>
      <TextInput
      style={styles.input}
    />
    <Text style={styles.getStartedText}>
        Sample link text here - Login
      </Text>
      <TextInput
      style={styles.input}
    />
    </ScrollView>
  );
}

LoginScreen.navigationOptions = {
  title: 'Login',
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
    textAlign: 'center',
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  }
})