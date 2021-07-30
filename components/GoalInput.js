import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import React from 'react';
const GoalInput = (props) => {
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={props.changetexthandler}
          value={props.enteredgoal}
        />
        <View style={styles.buttoncontainer}>
          <View style={styles.btn}>
            <Button title='Cancel' color='red' onPress={props.cancelgoal} />
          </View>
          <View style={styles.btn}>
            <Button onPress={props.addgoalhandler} title='ADD' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttoncontainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '60%',
  },
  btn: {
    width: '40%',
  },
});

export default GoalInput;
