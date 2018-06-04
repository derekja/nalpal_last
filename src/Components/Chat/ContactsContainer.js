import React from 'react'
import { View, ScrollView, StyleSheet} from 'react-native'
import {Contact} from "./ContactMessageCards"
import {AddButton} from "../UI/AddButton"

export class ContactsContainer extends React.Component<Props, State> {
  
  render() {
    const contactList = this.props.contacts;
    let contacts = (contactList).map((contact, i) =>
    <Contact contactName={contact.contactName} nickname={contact.nickname} key={i} id={i}/>
    );
    return (
      <View style={styles.flex}>
      <ScrollView>
        {contacts}
      </ScrollView>
      <AddButton onPress={this.props.openAddContact}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
});