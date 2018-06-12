import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView} from 'react-native'




export class EmergencyMessageBox extends React.Component<Props, State> {


  render() {

    let messages = this.props.messages.map((message, i) =>
    <Message text={message.text} sentByUser={message.senderId === 1} key={i}/>
    );
    return (
      <View>
        <ScrollView style={styles.messageBox}>
          {messages}
        </ScrollView>
          <TextInput
             value={"Send Message"}
          />
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
    padding: 10,
    height: 100
  },
  userMessage: {
    backgroundColor: 'lightgrey',
    padding: 5,
    maxWidth: '80%',
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