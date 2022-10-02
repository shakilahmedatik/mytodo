import { StyleSheet, TextInput, Button, View, Modal } from 'react-native'
import React, { useState } from 'react'

const GoalInput = ({ addInputHandler, visible }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const goalInputHandler = goal => {
    setEnteredGoalText(goal)
  }
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoalText}
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder='Your course goal!'
        />
        <Button
          onPress={() => {
            addInputHandler(enteredGoalText)
            setEnteredGoalText('')
          }}
          title='Add Goal'
        />
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
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
})
