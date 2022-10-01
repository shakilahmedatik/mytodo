import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addInputHandler = (enteredGoalText) => {
    enteredGoalText
      ? setCourseGoals((current) => [
          ...current,
          { text: enteredGoalText, id: Math.random().toString() },
        ])
      : alert("Input field is empty!");
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((current) => current.filter((goal) => goal.id !== id));
  };
  return (
    <View style={styles.appContainer}>
      <GoalInput addInputHandler={addInputHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => (
            <GoalItem
              onDeleteItem={deleteGoalHandler}
              text={itemData.item.text}
              id={itemData.item.id}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
});
