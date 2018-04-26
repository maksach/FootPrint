import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { TabNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { Button } from '../components/Button';

export class FoodScreen extends React.Component {
  state = {
    food: '',
    foodCalculate: false,
  }

  static navigationOptions = {
    title: 'Food',
  };

  onPressCalculate() {
    console.log("pressed food calculate");
    this.setState({
      foodCalculate: true,
    });
  }

  onPressNext() {
    console.log("pressed next");
    const { navigate } = this.props.navigation;
    navigate('Electricity');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = { styles.form }>
        <Text>
          Food
        </Text>
        <Button onPress = { () => this.onPressCalculate() } >Calculate</Button>
        <Button onPress = { () => this.onPressNext() } >Next</Button>
      </View>
    );
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

export default FoodScreen;
