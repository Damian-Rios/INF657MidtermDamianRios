import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Testing() {
  return (
    <View style={styles.container}>
        <View style={styles.container2}>
            <Text style={styles.text}>Testing</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    container2: {
        backgroundColor: "blue",
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
  });