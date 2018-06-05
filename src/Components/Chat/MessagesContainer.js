import React from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'
import {Message} from "./ContactMessageCards"
import {AddButton} from "../UI/AddButton"

export class MessagesContainer extends React.Component<Props, State> {
  
  render() {
    const messageList = this.props.messages;
    const max = 4;
    let n;
    let messages = (messageList).map((message, i) => {
        let contacts = message.contacts
        let currMax = max 
        let messageName = ""
        if (contacts.length < max) {
            currMax = contacts.length
        }
        for (n = 0; n < currMax - 2; n++) {
          messageName = messageName + contacts[n] + ", "
        }
        messageName = messageName + contacts[n]
        if (contacts.length > max) {
          messageName = messageName + "... and " + contacts[contacts.length - 1]
        } else {
          messageName = messageName + " and " + contacts[n + 1]
        }
        return (<Message messageName={messageName} key={i} index={i} id={i}/>)
      }
    );
    return (
      <View style={styles.flex}>
        <ScrollView>
          {messages}
        </ScrollView>
        <AddButton onPress={this.props.openComposeMessage}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
});