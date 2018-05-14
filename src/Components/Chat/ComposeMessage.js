import React from 'react'
import { View, ScrollView, StyleSheet} from 'react-native'
import {Contact} from "./ContactMessageCards"
import {SelectContact} from "./SelectContact"
import {colours} from "../colours"
import {MultiLineTextFieldComponent} from "../UI/MultiLineTextFieldComponent"

export class ComposeMessage extends React.Component<Props, State> {
  
  state={
    message: ""
  }

  onMessageChange = (id, text) => {
      this.setState({message: text})
  }

  render() {
    const contactList = this.props.contacts;
    let contacts = (contactList).map((contact, i) =>
    <SelectContact text={contact.nickname? contact.nickname : contact.contactName} key={i} id={i}/>
    );
    return (
      <View style={styles.composeContainer}>
        <MultiLineTextFieldComponent value={this.state.message} onChange={this.onMessageChange} id="message"/>
        <ScrollView 
            contentContainerStyle={styles.contactsContainer} 
            showsHorizontalScrollIndicator={true} 
        >
        {contacts}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    
    composeContainer: {
      flex: 1
    },
    contactsContainer: {
      height: 400
    }
});
