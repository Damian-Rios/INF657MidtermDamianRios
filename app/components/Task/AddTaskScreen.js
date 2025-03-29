import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "react-native-modal-datetime-picker";
import { categories } from "./TaskData";

export default function AddTaskScreen() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // DropDown
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(null);
    const categoryItems = categories.map((item) => ({
        value: item.value,
        label: item.label,
    }));

    // DateTimePicker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const showDatePicker = () => setDatePickerVisibility(true);
    const hideDatePicker = () => setDatePickerVisibility(false);
    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    // Add Task
    const handleSubmit = () => {
        if (title && description && category && selectedDate) {
            const task = {
                id: Math.random().toString(),
                title,
                description,
                category,
                date: selectedDate.toString(),
                image: "",
            };

            console.log(task);
            setTitle("");
            setDescription("");
            setCategory(null);
            setSelectedDate(null);
        } else {
            alert("Please enter all fields");
        }
    };

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.title}>Create Task</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Task Title"
                    onChangeText={setTitle}
                    value={title}
                />
                <TextInput
                    style={[styles.input, styles.descriptionInput]}
                    placeholder="Enter Task Description"
                    onChangeText={setDescription}
                    value={description}
                    multiline
                />
                <DropDownPicker
                    open={open}
                    value={category}
                    items={categoryItems}
                    setOpen={setOpen}
                    setValue={setCategory}
                    placeholder="Select Task Category"
                    containerStyle={styles.dropdown}
                    dropDownContainerStyle={styles.dropdownContainer}
                />

                <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
                    <Text style={styles.dateButtonText}>
                        {selectedDate ? `Date: ${selectedDate.toDateString()}` : "Pick a Date"}
                    </Text>
                </TouchableOpacity>

                <DateTimePicker
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Add Task</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#bdddfc",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        backgroundColor: "#ffffff",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#384959",
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: "#fafafa",
    },
    descriptionInput: {
        height: 80,
        textAlignVertical: "top",
    },
    dropdown: {
        marginBottom: 15,
    },
    dropdownContainer: {
        backgroundColor: "#ffffff",
        borderColor: "#ccc",
    },
    dateButton: {
        backgroundColor: "#88bdf2",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20,
    },
    dateButtonText: {
        color: "#384959",
        fontSize: 16,
    },
    button: {
        backgroundColor: "#88bdf2",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#384959",
        fontSize: 18,
        fontWeight: "bold",
    },
});
