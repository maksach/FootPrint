import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { HomeScreen } from './screens/HomeScreen';
import { SignInScreen } from './screens/SignInScreen';
import { CalendarScreen } from './screens/CalendarScreen';
import { SuggestionsScreen } from './screens/SuggestionsScreen';
import { SettingsScreen } from './screens/SettingsScreen';

const NavigationApp = StackNavigator({
    SignIn: { screen: SignInScreen },
    Home: { screen: HomeScreen },
    Calendar: { screen: CalendarScreen },
    Suggestions: { screen: SuggestionsScreen },
    Settings: { screen: SettingsScreen },
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
