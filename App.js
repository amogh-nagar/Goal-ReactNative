import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [enteredgoal, setenteredgoal] = useState('');
  const [coursegoals, setcoursegoals] = useState([]);
  const changetexthandler = (enteredtext) => {
    setenteredgoal(enteredtext);
  };

  const addgoalhandler = () => {
    setcoursegoals((prevstate) => [
      ...prevstate,
      { key: Math.random().toString(), val: enteredgoal },
    ]);
  };

  const removehandler = (id) => {
    setcoursegoals((currentgoals) => {
      return currentgoals.filter((goal) => goal.key !== id);
    });
  };
  return (
    <View style={styles.screen}>
      <GoalInput
        addgoalhandler={addgoalhandler}
        enteredgoal={enteredgoal}
        changetexthandler={changetexthandler}
      />
      <FlatList
        data={coursegoals}
        // keyExtractor={(item,index)=>item.id}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            onDelete={removehandler}
            val={itemData.item.val}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
