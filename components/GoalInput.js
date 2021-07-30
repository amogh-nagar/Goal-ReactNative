import {View,TextInput,Button,StyleSheet} from 'react-native'
import React from 'react'
const GoalInput = (props) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={props.changetexthandler}
          value={props.enteredgoal}
        />
        <Button onPress={props.addgoalhandler} title='ADD' />
      </View>
    )
}


const styles=StyleSheet.create({
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
})


export default GoalInput
