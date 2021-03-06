import React from 'react'
import { View, StyleSheet } from 'react-native'
import {TabComponent} from "../UI/TabComponent"
import ContactsContainer from "./ContactsContainer"
import {MessagesContainer} from "./MessagesContainer"
import {ComposeMessage} from "./ComposeMessage"
import {AddContact} from "./AddContact"
import {Header} from "../Navigation/Header"
import {getFriends, postAddFriend, getPendingRequests, postVerifyFriendRequest} from "../../Requests/friends"

export class Chat extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      selectedTabIndex: 0,
      contactsLoading: false,
      pendingRequestLoading: false,
      actionScreenOpen: null,
      contactState: {
      }

    };
  }

  handleTabChange = (index) => {
    this.setState({
      selectedTabIndex: index,
    });
  };

  openComposeMessage = () => {
    this.setState({actionScreenOpen: "composeMessage"})
  }

  openAddContact = () => {
    this.setState({actionScreenOpen: "addContact"})
  }

  closeActionScreen = () => {
    this.setState({actionScreenOpen: null, contactState: {}})
  }

  fetchContacts = () => {
    getFriends(this.props.id).then(
      (value) => { 
        this.props.changeState({contacts: value.data})
        this.setState({contactsLoading: false})
      },
      (error) => {
          this.props.setGlobalError("Error fetching contacts")
          this.setState({contactsLoading: false})
      })
  }

  addFriend = (contactUsername) => {
    postAddFriend(contactUsername, null, null, this.props.id).then(
      (value) => {
        this.setState({contactState: {addContactSuccess: true}})
      },
      (error) => {
        this.props.setGlobalError(error.message)
      })
  }

  fetchPendingRequests = () => {
    getPendingRequests(this.props.id).then(
        (value) => {
          this.props.changeState({pendingContacts: value.data})
          this.setState({pendingRequestLoading: false})
        },
        (error) => {
          this.props.setGlobalError("Error fetching contact requests")
          this.setState({pendingRequestLoading: false})
        }
    )
  }

  verifyFriendRequest = (friendId) => {
      postVerifyFriendRequest(friendId, this.props.id).then(
        (value) => {
            this.setState({contactsLoading: true, pendingRequestLoading: true})
            this.fetchPendingRequests()
            this.fetchContacts()
        },
        (error) => {
          this.props.setGlobalError("Something went wrong")
        }
      )
  }


  componentWillMount() {
    this.setState({contactsLoading: true, pendingRequestLoading: true})
    this.fetchPendingRequests()
    this.fetchContacts()
  }



  render() { 
    // const contacts = [{contactName:"Raybird6601", nickname: "Ray"}, {contactName:"MissMaryMac", nickname: "Mary"}, 
    // {contactName: "Creancer930", nickname: "Rebecca, met at party"},{ contactName: "ArclightVYNE", nickname: "Andrew, across the hall"}, {contactName: "Jeff627", nickname: "Jeff"},
    //  {contactName: "Contact0001", nickname: null}];
     const messages=[{contacts: ["MissMaryMac", "ArclightVYNE", "Raybird6601"]}, {contacts: ["MissMaryMac", "Creancer930"]},
      {contacts: ["ArclightVYNE", "Jeff627", "DamletHanish", "Creancer930", "MissMaryMac", "User0001"]}, {contacts: ["Jeff627", "DamletHanish", "Creancer930", "User0001"]}];
    const tabs = ["Contacts", "Messages"];

    if (this.state.actionScreenOpen) {
      return (
        <View style={styles.chatContainer}>
          {this.state.actionScreenOpen === "composeMessage" && <ComposeMessage contacts={this.props.contacts}/>}
          {this.state.actionScreenOpen === "addContact" && <AddContact 
                                                                  addFriend={this.addFriend} 
                                                                  contacts={this.props.contacts} 
                                                                  contactState={this.state.contactState}
                                                                  closeActionScreen={this.closeActionScreen}/>}
        </View>
        );
    } else {
      return (
        <View style={styles.chatContainer}>
        <Header headerTitle="Chat" emergencyInProgress={this.props.emergencyInProgress}/>
          <TabComponent handleTabChange= {this.handleTabChange} selectedTabIndex={this.state.selectedTabIndex} tabs={tabs}/>
          <View style={styles.chatContainer}>
            {this.state.selectedTabIndex === 0 && <ContactsContainer 
                                                          contacts={this.props.contacts}
                                                          loading={this.state.contactsLoading || this.state.pendingRequestsLoading}
                                                          verifyFriendRequest={this.verifyFriendRequest}
                                                          pendingContacts={this.props.pendingContacts}
                                                          openAddContact={this.openAddContact} />}
            {this.state.selectedTabIndex === 1 && <MessagesContainer 
                                                          openComposeMessage={this.openComposeMessage}
                                                          messages={messages} />}
          </View>
        </View>
    );
    }
  }

}
const styles = StyleSheet.create({
  chatContainer: {
      flex: 1
  },
  input: {
    borderColor: 'grey', 
    borderWidth: 1, 
    marginVertical: 5,
  },
  addContactContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20
  },
  messageContainerTabs: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tab: {
    borderColor: "black",
    borderWidth: 1,
    textAlign: 'left',
    width: '50%',
    padding: 5
  },
  activeTab: {
    borderBottomWidth: 0,
    borderRightWidth: 0
  },
  contactWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    backgroundColor: 'lightgrey',
    padding: 5
  },
  contactName: {
    paddingRight: 30
  },
  iconContainer: {
    flexDirection: 'row',

  }
  
});

