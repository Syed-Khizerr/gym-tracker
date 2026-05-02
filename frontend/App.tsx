import React from 'react';
import {HomeScreen}  from './screens/HomeScreen';
import {ProfileScreen} from './screens/ProfileScreen';
import {WorkoutSession} from './screens/WorkoutSession';
import { HistoryScreen } from 'screens/HistoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';


import './global.css';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='Home' component={HomeScreen} options={{
          tabBarIcon : ({focused}) => {
            return (<Image 
              source={
                focused ? require ("./assets/home.png") : require ("./assets/home.png")
              }
              style={{
                  width: focused?24:22,
                  height: focused?24:22
                }}
            />
  )},
          tabBarLabel : ({focused}) => {
            return (
              <Text className={focused?"text-zinc-950 font-bold text-sm":"text-zinc-600 text-sm"}>Home</Text>
            )
          }
          }}/>
        <Tab.Screen name='Workout' component={WorkoutSession} options={{
          tabBarIcon : ({focused}) => {
            return (<Image 
              source={
                focused ? require ("./assets/workout.png") : require ("./assets/workout.png")
              }
              style={{
                  width: focused?24:22,
                  height: focused?24:22
                }}
            />
  )},
          tabBarLabel : ({focused}) => {
            return (
              <Text className={focused?"text-zinc-950 font-bold text-sm":"text-zinc-600 text-sm"}>Workout</Text>
            )
          }
          }}
        />

        <Tab.Screen name='History' component={HistoryScreen} options={{
          tabBarIcon : ({focused}) => {
            return(
              <Image
                source={
                  focused ? require ("./assets/history.png") : require ("./assets/history.png")
                }
                style={{
                  width: focused?24:22,
                  height: focused?24:22
                }}
            />)
          },
          tabBarLabel : ({focused}) => {
            return (
              <Text className={focused?"text-zinc-950 font-bold text-sm":"text-zinc-600 text-sm"}>History</Text>
            )
          }
        }}
        />
        <Tab.Screen name='Profile' component={ProfileScreen} options={{
          tabBarIcon : ({focused}) => {
            return(
              <Image
                source={
                  focused ? require ("./assets/profile.png") : require ("./assets/profile.png")
                }
                style={{
                  width: focused?24:22,
                  height: focused?24:22
                }}
                />
            )
          },
          tabBarLabel : ({focused}) => {
            return (
              <Text className={focused?"text-zinc-950 font-bold text-sm":"text-zinc-600 text-sm"}>Profile</Text>
            )
          }
        }}
        
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
