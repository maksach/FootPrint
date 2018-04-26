import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { TabNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { Button } from '../components/Button';

export class ElectricityScreen extends React.Component {
  state = {
    electricity: '',
    electricityCalculate: false,
  }

  static navigationOptions = {
    title: 'Electricity',
  };

  onPressCalculate() {
    console.log("pressed electricity calculate");
    this.setState({
      electricityCalculate: true,
    });
  }

  onPressNext() {
    console.log("pressed result");
    // const { navigate } = this.props.navigation;
    // navigate('Electricity');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = { styles.form }>
        <Text>
          Electricity
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

export default ElectricityScreen;
