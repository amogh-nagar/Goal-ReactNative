import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
const GoalItem = (props) => {
  return (
    // <TouchableNativeFeedback onPress={props.onDelete}>
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={()=>{props.onDelete(props.id)}}
    >
      <View style={styles.goalitems}>
        <Text>{props.val}</Text>
      </View>
    </TouchableOpacity>
    // {/* </TouchableNativeFeedback> */}
  );
};

const styles = StyleSheet.create({
  goalitems: {
    padding: 10,
    marginVertical: 10,
    borderColor: '#758a85',
    backgroundColor: '#7adbe6',
    borderWidth: 1,
  },
});

export default GoalItem;
