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

  const deleteItem = (item) => {
    console.log("In", item);
    let newList = myToDoList.filter((ToDo) => ToDo.key !== item);
    setMyToDoList(newList);
  };

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
        renderItem={(itemData) => (
          <ToDoItem
            item={itemData.item}
            deleteItem={deleteItem.bind(this, itemData.item.key)}
          />
        )}
      />
      {/* <ScrollView style={styles.myList}>
        {myToDoList.map((myToDo, index) => (
          <Text style={styles.listItem} key={index}>
            {myToDo}
          </Text>
        ))}
      </ScrollView> */}
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
