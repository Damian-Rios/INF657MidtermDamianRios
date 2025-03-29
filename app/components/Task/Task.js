import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import TaskProperties from "./TaskProperties";
import { Swipeable } from "react-native-gesture-handler";

export default function Task({ image, title, description, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableOpacity onPress={onPress} style={styles.taskContainer}>
                <View style={styles.mainContainer}>
                    <Image style={styles.image} source={image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                </View>
                <TaskProperties />
            </TouchableOpacity>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: "#fafafa", // Light background
        marginBottom: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        overflow: "hidden",
        padding: 10,
    },
    mainContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#384959",
    },
    description: {
        fontSize: 14,
        color: "#6a897a",
    },
});
