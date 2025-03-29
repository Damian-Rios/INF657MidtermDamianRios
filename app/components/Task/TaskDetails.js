import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const TaskDetails = ({ route }) => {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <View style={styles.card}>
        <Image style={styles.image} source={task.image} />
        <Text style={styles.description}>{task.description}</Text>
        <Text style={styles.detailText}>
          <Text style={styles.label}>Category:</Text> {task.category}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.label}>Due Date:</Text> {task.date}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
    backgroundColor: "#bdddfc",
    alignItems: "center",
  },
  title: {
    paddingTop: 30,
    fontSize: 26,
    fontWeight: "bold",
    color: "#384959",
    textAlign: "center",
    marginBottom: 15,
  },
  card: {
    width: "100%",
    backgroundColor: "#fafafa",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  description: {
    fontSize: 18,
    color: "#444",
    textAlign: "center",
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: "#384959",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    color: "#384959",
  },
});

export default TaskDetails;
