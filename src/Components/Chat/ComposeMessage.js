import React from 'react'
import { View, ScrollView, StyleSheet} from 'react-native'
import {SelectContact} from "./SelectContact"
import {MultiLineTextFieldComponent} from "../UI/MultiLineTextFieldComponent"

export class ComposeMessage extends React.Component<Props, State> {
  
  constructor(props) {
    super(props);
    this.state = {
      message: ""

    };
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
