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
  })

export class HomeScreen extends React.Component {

  static navigationOptions = {
    headerTitleStyle: {
      alignSelf: 'center'
    },
    title: 'FootPrint'
  }

  render() {
    return <Tab />;
  }
}

export default HomeScreen;
