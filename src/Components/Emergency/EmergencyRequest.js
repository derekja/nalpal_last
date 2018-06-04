import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {EmergencyMessageBox} from './EmergencyMessageBox'
import {CancelButton} from '../UI/CancelButton'

export class EmergencyRequest extends React.Component {

  cancelRequest = () => {
      this.props.changeState({requester: {}})
  }

  render() {
    const messages = [
    {text:"(Automated message) Thank you for helping me, I am in room 253, the code to the building is 8819, my door is unlocked", senderId: 1}, 
    {text:"This is jeffs friend, we are actually in my room room 321, please hurry", senderId: 1},
    ];

    return (
      <View>
        <CancelButton
          title="Cancel Emergency"
          onPress={this.cancelRequest}
        />
        <Text style={styles.textBox}>
          There are currently 2 people who have responded, the closest is 250m away
        </Text>
        <EmergencyMessageBox textInput={true} messages={messages}/>
      </View>

    );
  }

}

const styles = StyleSheet.create({
  textBox: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    maxWidth: 250
  },
});
