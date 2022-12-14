import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const FloatingPlusBtn = ({ startAddGoalHandler }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={startAddGoalHandler}
      style={styles.touchableOpacityStyle}
    >
      <Image
        // FAB using TouchableOpacity with an image
        // For online image
        source={require('../assets/Add.png')}
        // For local image
        //source={require('./images/float-add-icon.png')}
        style={styles.floatingButtonStyle}
      />
    </TouchableOpacity>
  )
}

export default FloatingPlusBtn

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    borderRadius: 30,
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#BDB6B6',
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
})
