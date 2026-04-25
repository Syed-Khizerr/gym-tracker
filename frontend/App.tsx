import React from 'react';
import {HomeScreen}  from './screens/HomeScreen';
import {ProfileScreen} from './screens/ProfileScreen';
import {WorkoutSession} from './screens/WorkoutSession';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import './global.css';

const Stack = createNativeStackNavigator();

const StackNavigator =() => (
  <NavigationContainer >

    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Workout' component={WorkoutSession} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
    
  </NavigationContainer>
  );
export default function App() {
  return (
    <>
    <StackNavigator/>
    </>
  );
}
