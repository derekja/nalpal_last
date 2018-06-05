import React from 'react'
import { View, ScrollView, StyleSheet, Text} from 'react-native'
import {Contact} from "./ContactMessageCards"
import {AddButton} from "../UI/AddButton"
import {ModalComponent} from "../UI/Modal"
import {ModalButton} from "../UI/ModalButton"
import {CancelButton} from "../UI/CancelButton"

export class ContactsContainer extends React.Component<Props, State> {
  
  constructor(props) {
    super(props);
    this.state = {
      friendRequestDialogOpen: false,
      selectedContact: {
        id: "", 
        username: "", 
        nickname: ""
      }

    };
  }

  openFriendRequestDialog = (selectedContact) => {
    this.setState({friendRequestDialogOpen: true, selectedContact: selectedContact})
  }

  closeFriendRequestDialog = () => {
    this.setState({friendRequestDialogOpen: false})
  }

  approveFriendRequest = () => {
    this.props.verifyFriendRequest(this.state.selectedContact.id)
    this.closeFriendRequestDialog()
  }

  render() {
    const pendingList = this.props.pendingContacts
    let pending = (pendingList).map((contact, i) =>
    <Contact pending={true} contactName={contact.contactName} index={i} key={i} id={contact.id} onPress={this.openFriendRequestDialog}/>
    );
    const contactList = this.props.contacts;
    let contacts = (contactList).map((contact, i) =>
    <Contact contactName={contact.contactName} nickname={contact.nickname} index={i} key={i} id={contact.id}/>
    );
    return (
      <View style={styles.flex}>
      <ScrollView>
        {pending}
        {contacts}
      </ScrollView>
      <AddButton onPress={this.props.openAddContact}/>
      <ModalComponent isVisible={this.state.friendRequestDialogOpen}>
          <CancelButton
          title="Back"
          onPress={this.closeFriendRequestDialog}
          />
          <Text> Approve friend request from {this.state.selectedContact.username}?</Text>
          <ModalButton
            title="Approve"
            onPress={this.approveFriendRequest}
          />
      </ModalComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
});