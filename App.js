import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { Input } from './components/Input';
import { Button } from './components/Button';

class SignInScreen extends React.Component {
  state = {
    email: '',
    password: '',
    authenticating: false,
  }

  static navigationOptions = {
    title: 'Sign In',
  };

  onPressSignIn() {
    this.setState({
      authenticating: true,
    });
    const { navigate } = this.props.navigation;
    navigate('Home');
  }

  renderCurrentState() {
    // if(this.state.authenticating) {
    //   return (
    //     <View style = { styles.form }>
    //       <ActivityIndicator size='large' />
    //     </View>
    //   )
    // }

    return (
      <View style = { styles.form }>
        <Text style = { styles.title } >FootPrint</Text>
        <Input
          placeholder = 'Enter your email...'
          label = 'Email'
          onChangeText = { email => this.setState( { email } )}
          value = { this.state.email }
        />
        <Input
          placeholder = 'Enter your password...'
          label = 'Password'
          secureTextEntry
          onChangeText = { password => this.setState( { password } )}
          value = { this.state.password }
        />
        <Button onPress = { () => this.onPressSignIn() } >Log In</Button>
        <Button onPress = { () => this.onPressSignIn() } >Sign Up</Button>
      </View>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = { styles.container }>
        { this.renderCurrentState() }
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = { styles.container }>
        <Text>
          Home
        </Text>
      </View>
    );
  }
}

const NavigationApp = StackNavigator({
  SignIn: { screen: SignInScreen },
  Home: { screen: HomeScreen },
  }, {
    navigationOptions: {
      headerStyle: {
        // marginTop: Expo.Constants.statusBarHeight
      }
    }
})

export default class App extends React.Component {

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBoG9NthM8oAmw6__jCY5WYM7C0kHCopZY',
      authDomain: 'footprint-fc04b.firebaseapp.com',
    }

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return <NavigationApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  form: {
    flex: 1,
  },
  title: {
    padding: 5,
    paddingBottom: 0,
    color: '#333',
    fontSize: 35,
    fontWeight: '700',
    width: '100%',
    textAlign: 'center',
  },
});
