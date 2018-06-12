import React from 'react'
import { View, ScrollView, StyleSheet, Text} from 'react-native'
import {Contact} from "./ContactMessageCards"
import {AddButton} from "../UI/Buttons/AddButton"
import {ModalComponent} from "../UI/Modal"
import {ModalButton} from "../UI/Buttons/ModalButton"
import {CloseButton} from "../UI/Buttons/CloseButton"
import withLoadingScreen from "../UI/Loading"

class ContactsContainer extends React.Component<Props, State> {
  
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
          <CloseButton
          onPress={this.closeFriendRequestDialog}
          />
          <Text style={styles.modalText}> Approve friend request from {this.state.selectedContact.username}?</Text>
          <View style={styles.modalButtonWrapper}>
            <ModalButton
              title="Approve"
              onPress={this.approveFriendRequest}
            />
          </View>
      </ModalComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  modalText: {
    textAlign: 'center',
    width: '100%'
  },
  modalButtonWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20
  }
});

export default withLoadingScreen(ContactsContainer);