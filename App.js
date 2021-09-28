import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import NewToDo from "./components/NewToDo";
import ToDoItem from "./components/ToDoItem";

export default function App() {
  const [newToDo, setNewToDo] = useState("");
  const [myToDoList, setMyToDoList] = useState([]);

  return (
    <View style={styles.screen}>
      <NewToDo
        enteredToDo={newToDo}
        setNewToDo={setNewToDo}
        setMyToDoList={setMyToDoList}
        myToDoList={myToDoList}
      />
      <FlatList
        data={myToDoList}
        renderItem={(itemData) => <ToDoItem item={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingTop: 40,
  },

  listItem: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "gray",
    marginBottom: 14,
  },
  myList: {
    paddingTop: 10,
  },
});
