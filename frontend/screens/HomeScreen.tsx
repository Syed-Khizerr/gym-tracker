import React from "react";
import {Text, View, Pressable} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View className="h-full">
        <View className="flex-1 justify-center items-center">
            <Text>Hi this is Home Screen</Text>
        </View>
        <View className ="my-auto flex-row w-full">
            <Pressable className={styles.button}  onPress = {()=>navigation.navigate('Home')}><Text>Home</Text></Pressable>
            <Pressable className={styles.button} onPress = {()=>navigation.navigate('Workout')}><Text>Workout</Text></Pressable>
            <Pressable className={styles.button}  onPress = {()=>navigation.navigate('Profile')}><Text>Profile</Text></Pressable>
        </View>
        </View>
    );
};

const styles = {
    button: "border rounded-l bg-red-500 w-40 h-20 flex items-center justify-center"

};