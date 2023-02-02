import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  Button,
  LogBox,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Medicine from './src/screens/Medicine';
import PatientData from './src/screens/PatientData';
import Sales from './src/screens/Sales';
// import Scanner from './src/screens/Scanner';

const Stack = createNativeStackNavigator();
// LogBox.ignoreAllLogs();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Patient'
      >
        <Stack.Screen name='Patient' component={PatientData} />
        <Stack.Screen name='Medicine' component={Medicine} />
        <Stack.Screen name='Sales' component={Sales} />
        {/* <Stack.Screen name='Scanner' component={Scanner} /> */}
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
