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
    height: 700,
  },
  content: {
    height: 50,
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
    width: 360,
  }
})