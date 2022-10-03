import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const GoalItem = ({ text, id, onDeleteItem }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={onDeleteItem.bind(this, id)}
    >
      <View style={styles.goalItem}>
        <Image source={require('../assets/Done_ring_round_fill.png')} />
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 8,
    borderRadius: 25,
    backgroundColor: '#807979',
  },
  goalText: {
    color: 'white',
    fontSize: 25,
    marginLeft: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
})
