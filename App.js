import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  /*const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: enteredGoal},
    ]);
  };
  we cant use the function like this because it has enteredGoal which is the state stored in goalinput
  so we are going to name it differently and make dure that we forward that variable to GoalInput
  */

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      //shorter statement of return
      ...currentGoals,
      {id: Math.random().toString(), value: goalTitle},
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    })
  };

  //RETURNS use parentheses when they are going to render some item
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
