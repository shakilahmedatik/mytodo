import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const goalInputHandler = goal => {
    setEnteredGoalText(goal)
  }
  const addInputHandler = () => {
    setCourseGoals(current => [...current, enteredGoalText])
    setEnteredGoalText('')
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoalText}
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder='Your course goal!'
        />
        <Button onPress={addInputHandler} title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map(goal => (
          <View style={styles.goalItem}>
            <Text style={styles.goalText} key={goal}>
              {goal}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },

  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
})
