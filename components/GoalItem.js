import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const GoalItem = ({ text, id, onDeleteItem }) => {
  return (
    <Pressable
      android_ripple={{ color: '#210644' }}
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={onDeleteItem.bind(this, id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
})
