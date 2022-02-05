//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity
      onPress={() => pressHandler(item.key)}
      style={styles.container}
    >
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});

//make this component available to the app
export default TodoItem;
