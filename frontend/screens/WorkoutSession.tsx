import React from "react";
import {Text, View, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const WorkoutSession = ()=>{
const navigation = useNavigation()
    return (
        <View className="h-full">
        <View className="flex-1 justify-center items-center">
            <Text>Hi this is Workout Screen</Text>
        </View>
        </View>
    );
};

