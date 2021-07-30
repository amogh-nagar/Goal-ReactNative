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
  const [isaddmode, setisaddmode] = useState(false);
  const [enteredgoal, setenteredgoal] = useState('');
  const [coursegoals, setcoursegoals] = useState([]);
  const changetexthandler = (enteredtext) => {
    setenteredgoal(enteredtext);
  };

  const addgoalhandler = () => {
    if (enteredgoal.length === 0) {
      setenteredgoal('');
      setisaddmode(false);
      return;
    }
    setcoursegoals((prevstate) => [
      ...prevstate,
      { key: Math.random().toString(), val: enteredgoal },
    ]);
    setenteredgoal('');
    setisaddmode(false);
  };

  const removehandler = (id) => {
    setcoursegoals((currentgoals) => {
      return currentgoals.filter((goal) => goal.key !== id);
    });
  };

  const closemodal = () => {
    setisaddmode(false);
  };

  return (
    <View style={styles.screen}>
      <Button
        title='Add new goal'
        onPress={() => {
          setisaddmode(true);
        }}
        style={styles.addbutton}
      />

      <GoalInput
        visible={isaddmode}
        addgoalhandler={addgoalhandler}
        enteredgoal={enteredgoal}
        changetexthandler={changetexthandler}
        cancelgoal={closemodal}
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
  addbutton: {
    borderRadius: 5,
  },
});
