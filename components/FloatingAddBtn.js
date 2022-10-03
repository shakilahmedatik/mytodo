import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const FloatingAddBtn = ({
  addInputHandler,
  setEnteredGoalText,
  enteredGoalText,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        addInputHandler(enteredGoalText)
        setEnteredGoalText('')
      }}
      style={styles.touchableOpacityStyle}
    >
      <Image
        source={require('../assets/Add_square.png')}
        style={styles.floatingButtonStyle}
      />
    </TouchableOpacity>
  )
}

export default FloatingAddBtn

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    borderRadius: 6,
    width: 60,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4ECA8F',
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
})
