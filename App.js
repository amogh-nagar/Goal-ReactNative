import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  ScrollView,
} from 'react-native';

export default function App() {
  const [enteredgoal, setenteredgoal] = useState('');
  const [coursegoals, setcoursegoals] = useState([]);
  const changetexthandler = (enteredtext) => {
    setenteredgoal(enteredtext);
  };

  const addgoalhandler = () => {
    setcoursegoals((prevstate) => [...prevstate, enteredgoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={changetexthandler}
          value={enteredgoal}
        />
        <Button onPress={addgoalhandler} title='ADD' />
      </View>
      <ScrollView>
        {coursegoals.map((goal, index) => (
          <View key={index} style={styles.goalitems}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },
  goalitems: {
    padding: 10,
    marginVertical: 10,
    borderColor: '#758a85',
    backgroundColor: '#7adbe6',
    borderWidth: 1,
  },
});
