import React from 'react';
import {Button, StyleSheet, TextInput, View, Modal} from 'react-native';
import {useState} from 'react/cjs/react.development';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  //to set up an argument that should be past along we can use an anonymous func or bind
  //bind indicates arguments that should be received when the function gets called, in this case is the onPress
  //this way now we can add enteredGoal to the function
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, //flex controls how much space an element inside a flexbox take, if the element we are adding flex to is the only child, it will take the 100% that the parent element gives
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
