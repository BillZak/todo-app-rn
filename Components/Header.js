//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "slateblue",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

//make this component available to the app
export default Header;
