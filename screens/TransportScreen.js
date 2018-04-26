import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { TabNavigator } from 'react-navigation';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import * as firebase from 'firebase';
// import { Input } from './components/Input';
// import { Button } from './components/Button';

export class TransportScreen extends React.Component {
  state = {
    mpg: '',
    milesDriven: '',
    transportCalculate: false,
  }

  static navigationOptions = {
    title: 'Transport',
  };

  onPressCalculate() {
    console.log("pressed transport calculate");
    this.setState({
      transportCalculate: true,
    });
  }

  onPressNext() {
    console.log("pressed next");
    const { navigate } = this.props.navigation;
    navigate('Food');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = { styles.form }>
        <Text>
          Years:
        </Text>
        <Text>
          Make:
        </Text>
        <Text>
          Model:
        </Text>
        <Input
          placeholder = 'Miles Per Gallon'
          onChangeText = { mpg => this.setState( { mpg } )}
          value = { this.state.mpg }
        />
        <Input
          placeholder = 'Miles Driven Today'
          onChangeText = { milesDriven => this.setState( { milesDriven } )}
          value = { this.state.milesDriven }
        />
        <Button onPress = { () => this.onPressCalculate() } >Calculate</Button>
        <Button onPress = { () => this.onPressNext() } >Next</Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
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

export default TransportScreen;
