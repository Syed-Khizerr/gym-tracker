import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadWorkouts = async()=> {
    try {
        const value = await AsyncStorage.getItem('workouts');
        if (value != null){
            return(JSON.parse(value));
        }
        else{
            return([])
        }
    } catch (error) {
        return([]);
    }
}
export const addWorkout = async(value) => {
    try {
        const oldWorkouts = await AsyncStorage.getItem('workouts')
        const workouts = oldWorkouts ? JSON.parse(oldWorkouts) : [];
        workouts.push(value)
        await AsyncStorage.setItem('workouts', JSON.stringify(workouts))
    } catch (error) {
        console.log(error);
    }
}
