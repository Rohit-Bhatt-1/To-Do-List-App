import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [newTodo, setNewTodo] = useState("");
  const [myToDoList, setMyToDoList] = useState([]);

  const getNewToDo = (ToDo) => {
    setNewTodo(ToDo);
  };

  const addToDo = () => {
    setMyToDoList((myToDoList) => [...myToDoList, newTodo]);
    console.log(newTodo);
    setNewTodo("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.newTask}>
        <TextInput
          style={styles.newTaskDef}
          placeholder="Enter a new To-Do"
          onChangeText={getNewToDo}
          value={newTodo}
        />
        <Button title="Add" onPress={addToDo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingTop: 40,
  },
  newTask: {
    flexDirection: "row",
  },
  newTaskDef: {
    flex: 1,
    borderColor: "black",
    height: 35,
    marginRight: 10,
    borderBottomWidth: 1,
    borderRightWidth: 2,
    alignContent: "space-between",
  },
});
