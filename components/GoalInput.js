import { StyleSheet, TextInput, Button, View, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import FloatingCancelBtn from './FloatingCancelBtn'
import FloatingAddBtn from './FloatingAddBtn'

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
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/File_dock_duotone_line.png')}
          />
        </View>
        <View style={styles.inputBtnContainer}>
          <TextInput
            value={enteredGoalText}
            onChangeText={goalInputHandler}
            style={styles.textInput}
            placeholder="Don't Wait, Add a Task!"
          />
          <View style={styles.addBtn}>
            <FloatingAddBtn
              enteredGoalText={enteredGoalText}
              setEnteredGoalText={setEnteredGoalText}
              addInputHandler={addInputHandler}
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
  inputBtnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtn: { position: 'absolute', right: 36 },
  textInput: {
    backgroundColor: '#BDB6B6',
    color: '#5F5151',
    fontSize: 16,
    borderRadius: 6,
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  imageContainer: {
    backgroundColor: '#BDB6B6',
    width: 100,
    height: 100,
    borderRadius: 60,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
})
