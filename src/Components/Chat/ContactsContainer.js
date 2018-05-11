import React from 'react'
import { View} from 'react-native'
import {Contact} from "./ContactMessageCards"

export class ContactsContainer extends React.Component<Props, State> {
  
  render() {
    const contactList = this.props.contacts;
    let contacts = (contactList).map((contact, i) =>
    <Contact contactName={contact.contactName} nickname={contact.nickname} key={i} id={i}/>
    );
    return (
      <View >
        {contacts}
      </View>
    );
  }
}