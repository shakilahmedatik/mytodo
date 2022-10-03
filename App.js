import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import FloatingButton from './components/FloatingButton'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const addInputHandler = enteredGoalText => {
    if (enteredGoalText) {
      setCourseGoals(current => [
        ...current,
        { text: enteredGoalText, id: Math.random().toString() },
      ])
      setModalIsVisible(false)
    } else {
      alert('Input field is empty!')
    }
  }

  const deleteGoalHandler = id => {
    setCourseGoals(current => current.filter(goal => goal.id !== id))
  }

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <GoalInput
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
          addInputHandler={addInputHandler}
        />
        {courseGoals.length ? (
          <View style={styles.goalsContainer}>
            <FlatList
              data={courseGoals}
              keyExtractor={(item, index) => {
                return item.id
              }}
              renderItem={itemData => (
                <GoalItem
                  onDeleteItem={deleteGoalHandler}
                  text={itemData.item.text}
                  id={itemData.item.id}
                />
              )}
            />
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No goals yet! Add now. </Text>
          </View>
        )}
        <FloatingButton startAddGoalHandler={startAddGoalHandler} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
    marginTop: 30,
  },
  emptyContainer: {
    flex: 1,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#b180f0',
  },
})
