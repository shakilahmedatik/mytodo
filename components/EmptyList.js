import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/notebook_light.png')}
      />
      <Text style={styles.heading}>No Tasks So Far</Text>
      <Text style={styles.textDesc}>
        Add a task by clicking the plus button down below
      </Text>
    </View>
  )
}

export default EmptyList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  image: {
    width: 150,
    height: 150,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E0D0D0',
    opacity: 0.8,
    marginBottom: 6,
  },
  textDesc: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E0D0D0',
    opacity: 0.6,
  },
})
