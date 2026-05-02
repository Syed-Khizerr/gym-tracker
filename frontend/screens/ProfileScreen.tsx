import React from "react";
import {Text, View, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ProfileScreen = ()=>{
const navigation = useNavigation()
    return (
        <View className="h-full">
        <View className="flex-1 justify-center items-center">
            <Text>Hi this is Profile Screen</Text>
        </View>
        </View>
    );
};
    
const styles = {
     button: "border rounded-l bg-red-500 w-40 h-20 flex items-center justify-center"
    
};