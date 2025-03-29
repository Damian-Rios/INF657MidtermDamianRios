import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function TaskProperties({ date, status }) {
    return (
        <View style={styles.container}>
            <Text style={styles.properties}>Date: {date}</Text>
            <Text style={styles.properties}>Status: {status}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fafafa",
        padding: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
    },
    properties: {
        fontWeight: "bold",
        backgroundColor: "#88bdf2",
        marginBottom: 5,
        borderRadius: 10,
        padding: 10,
        textAlign: "center",
    },
});
