import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// Você pode importar de arquivos locais
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
	  <Text>
		Flamengo
	  <Text/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen
});

const AppContainer = createAppContainer(AppNavigator);
