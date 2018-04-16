import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
// import { Input } from './components/Input';
// import { Button } from './components/Button';

export class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = { styles.container }>
        <Text>
          Settings
        </Text>
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

export default SettingsScreen;
