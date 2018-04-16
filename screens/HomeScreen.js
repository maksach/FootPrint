import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { TabNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { TransportScreen } from './TransportScreen';
import { FoodScreen } from './FoodScreen';
import { ElectricityScreen } from './ElectricityScreen';
// import { Input } from './components/Input';
// import { Button } from './components/Button';

const Tab = TabNavigator({
    Transport: { screen: TransportScreen },
    Food: { screen: FoodScreen },
    Electricity: { screen: ElectricityScreen }
  }, {
    navigationOptions: {
      headerStyle: {
        // marginTop: Expo.Constants.statusBarHeight
      }
    }
})

export default class HomeScreen extends React.Component {

  render() {
    return <Tab />;
  }
}
