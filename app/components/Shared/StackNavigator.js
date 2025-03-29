import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskList from '../Task/TaskList';
import AddTaskScreen from '../Task/AddTaskScreen';
import TaskDetails from '../Task/TaskDetails';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
            <Stack.Screen name="Tasks" component={TaskList} />
            <Stack.Screen name="AddTask" component={AddTaskScreen} />
            <Stack.Screen name="TaskDetails" component={TaskDetails} />
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator