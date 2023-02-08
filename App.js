import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  Button,
  ImageBackground,
  LogBox,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './src/screens/Home';
import Medicine from './src/screens/Medicine';
import PatientData from './src/screens/PatientData';
import Sales from './src/screens/Sales';

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();


const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Patient' component={PatientData} />
        <Stack.Screen name='Medicine' component={Medicine} />
        <Stack.Screen name='Sales' component={Sales} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
  }
});

export default App;
