import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const FloatingCancelBtn = ({ onCancel, setEnteredGoalText }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        onCancel()
        setEnteredGoalText('')
      }}
      style={styles.touchableOpacityStyle}
    >
      <Image
        source={require('../assets/Close_round.png')}
        style={styles.floatingButtonStyle}
      />
    </TouchableOpacity>
  )
}

export default FloatingCancelBtn

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    borderRadius: 15,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    top: 60,
    backgroundColor: '#F96060',
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
})
