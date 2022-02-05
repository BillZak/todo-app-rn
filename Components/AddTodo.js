//import liraries
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

// create a component
const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type in todo"
        onChangeText={changeHandler}
      />
      <TouchableOpacity onPress={() => submitHandler(text)}>
        <Text style={styles.submitBtn}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
  },
  submitBtn: {
    fontSize: 20,
    backgroundColor: "slateblue",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
  },
});

//make this component available to the app
export default AddTodo;
