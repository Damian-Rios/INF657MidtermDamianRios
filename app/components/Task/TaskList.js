import { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, TouchableOpacity } from "react-native";

import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

import Task from "./Task";
import { TaskData } from "./TaskData";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function TaskList() {
    const navigation = useNavigation();
    const route = useRoute();
    const [taskList, setTaskList] = useState(TaskData);

    // Delete task by filtering it out based on its id
    const deleteTask = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
    };

    // Navigate to "AddTask" screen to add a new task
    const handleAddTask = () => {
        navigation.navigate("AddTask");
    };

    // Navigate to "TaskDetails" screen to view the task details
    const handleTaskDetails = (task) => {
        navigation.navigate("TaskDetails", { task });
    };

    useEffect(() => {
        // Add new task to the list when a new task is passed from the "AddTask" screen
        if (route.params?.newTask) {
            const newTask = route.params.newTask;
            setTaskList((prevList) => [...prevList, newTask]);
        }
    }, [route.params]);

    return (
        <SafeAreaView style={styles.screen}>
            <FlatList 
                data={taskList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Task 
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        onPress={() => handleTaskDetails(item)}
                        renderRightActions={() => (
                            <View style={styles.deleteContainer}>
                                <TouchableWithoutFeedback onPress={() => deleteTask(item.id)}>
                                    <MaterialCommunityIcons 
                                        name="trash-can"
                                        size={35}
                                        color="white"
                                    />
                                </TouchableWithoutFeedback>
                            </View>
                        )}
                    />
                )}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                <MaterialCommunityIcons name="plus-circle" size={50} color="#384959" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#bdddfc",
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    deleteContainer: {
        backgroundColor: "#384959",
        width: 70,
        justifyContent: "center",
        alignItems: "center",
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#fafafa',
        borderRadius: 50,
        padding: 10,
        elevation: 5,
    },
});
