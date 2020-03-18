import React from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput } from 'react-native';

export default function LoginScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
      </View>
      <View>
        <Text style={styles.getStartedText}>
          email
        </Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.getStartedText}>
          password
        </Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <View style={styles.fill}>
        <Text style={styles.newUser}>
        new? click here!
        </Text>
      </View>
    </ScrollView>
  );
}

LoginScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: '#c0eaea',
  },
  content: {
    height: 50,
  },
  getStartedText: {
    fontSize: 15,
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
    width: 360,
  },
  fill: {
    flex: 1, 
    height: 300,    
    backgroundColor: '#c0eaea',
    justifyContent: 'center', 
  },
  newUser: {
    fontSize: 17,
  },
})