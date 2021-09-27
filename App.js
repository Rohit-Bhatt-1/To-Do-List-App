import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.newTask}>
        <TextInput style={styles.newTaskDef} />
        <Button title="Add" />
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
    justifyContent: "flex-end",
  },
});
