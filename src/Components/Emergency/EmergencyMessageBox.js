import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'




export class EmergencyMessageBox extends React.Component<Props, State> {


  render() {

    let messages = this.props.messages.map((message) =>
    <Message text={message.text} sentByUser={message.senderId === 1}/>
    );
    return (
      <View>
        <View style={styles.messageBox}>
          {messages}
        </View>
          {this.props.textInput && <TextInput
            style={{borderColor: 'black', borderWidth: 1}}
            value={"Enter Message"}
          />}
      </View>

    );
  }

}

const Message = ({text, sentByUser}) => (
  <View style={sentByUser? [styles.messageWrapper, styles.rightAligned] : [styles.messageWrapper, styles.leftAligned]}>
    <Text style={styles.userMessage}>
      {text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  messageBox: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
  },
  userMessage: {
    backgroundColor: 'lightgrey',
    padding: 5,
    maxWidth: 200,
  },
  messageWrapper: {
    paddingBottom: 5,
    flexDirection: 'row',
  },
  leftAligned: {
    justifyContent: 'flex-start'
  },
  rightAligned: {
    justifyContent: 'flex-end'
  }
});