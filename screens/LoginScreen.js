import React, {Component} from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableHighlight,
  Modal,
  Button 
} from 'react-native';

class LoginScreen extends Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() { 
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
        <View style={styles.loginBtn}>
          <Button 
            title='Login' 
          >
          </Button>
        </View>
        <View style={styles.fill}>
          <TouchableHighlight onPress={() => {
            this.setModalVisible(true);
          }}>
            <Text style={styles.newUser}>
              new? click here to register!
            </Text>
          </TouchableHighlight>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
          >
          <View style={{marginTop: 22}}>
            <View>
              <Text>Login Page</Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Exit Screen</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
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
  loginBtn: {
    width: 120,
  },
})

export default LoginScreen;