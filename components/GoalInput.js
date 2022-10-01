import { StyleSheet, TextInput, Button, View } from "react-native";
import React, { useState } from "react";

const GoalInput = ({ addInputHandler }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (goal) => {
    setEnteredGoalText(goal);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoalText}
        onChangeText={goalInputHandler}
        style={styles.textInput}
        placeholder="Your course goal!"
      />
      <Button
        onPress={() => {
          addInputHandler(enteredGoalText);
          setEnteredGoalText("");
        }}
        title="Add Goal"
      />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
