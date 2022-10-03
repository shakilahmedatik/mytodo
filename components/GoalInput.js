import { StyleSheet, TextInput, Button, View, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import FloatingCancelBtn from './FloatingCancelBtn'

const GoalInput = ({ addInputHandler, visible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const goalInputHandler = goal => {
    setEnteredGoalText(goal)
  }
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <FloatingCancelBtn
          onCancel={onCancel}
          setEnteredGoalText={setEnteredGoalText}
        />
        <Image style={styles.image} source={require('../assets/goal.png')} />
        <TextInput
          value={enteredGoalText}
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder='Your course goal!'
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color='#b180f0'
              onPress={() => {
                addInputHandler(enteredGoalText)
                setEnteredGoalText('')
              }}
              title='Add Goal'
            />
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
    backgroundColor: '#5F5151',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
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
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
})
