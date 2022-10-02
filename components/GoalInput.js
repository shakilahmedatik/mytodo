import { StyleSheet, TextInput, Button, View, Modal } from 'react-native'
import React, { useState } from 'react'

const GoalInput = ({ addInputHandler, visible, onCancel }) => {
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
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={() => {
                addInputHandler(enteredGoalText)
                setEnteredGoalText('')
              }}
              title='Add Goal'
            />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})
