import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import {CancelButton} from '../CancelButton'
import {MessageIcon} from '../Icons/MessageIcon'
import {Contact, Message} from "./ContactMessageCards"
import {TabComponent} from "../UI/TabComponent"
import {ContactsContainer} from "./ContactsContainer"
import {MessagesContainer} from "./MessagesContainer"


export class Chat extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      selectedTabIndex: 0,
    };
  }

  handleTabChange = (index) => {
    this.setState({
      selectedTabIndex: index,
    });
  };


  render() { 
    const contacts = [{contactName:"Raybird6601", nickname: "Ray"}, {contactName:"MissMaryMac", nickname: "Mary"}, 
    {contactName: "Creancer930", nickname: "Rebecca, met at party"},{ contactName: "ArclightVYNE", nickname: "Andrew, across the hall"}, {contactName: "Jeff627", nickname: "Jeff"},
     {contactName: "Contact0001", nickname: null}];
     const messages=[{contacts: ["MissMaryMac", "ArclightVYNE", "Raybird6601"]}, {contacts: ["MissMaryMac", "Creancer930"]},
      {contacts: ["ArclightVYNE", "Jeff627", "DamletHanish", "Creancer930", "MissMaryMac", "User0001"]}, {contacts: ["Jeff627", "DamletHanish", "Creancer930", "User0001"]}];
    const tabs = ["Contacts", "Messages"];
    return (
        <View>
            <TabComponent handleTabChange= {this.handleTabChange} selectedTabIndex={this.state.selectedTabIndex} tabs={tabs}/>
            {this.state.selectedTabIndex == 0 && <ContactsContainer contacts={contacts} />}
            {this.state.selectedTabIndex == 1 && <MessagesContainer messages={messages} />}
        </View>
    );
  }

}

// const Contact = ({contactName}) => (
//   <View style={styles.contactWrapper}>
//     <Text style={styles.contactName}>
//       {contactName}
//     </Text>
//     <View style={styles.iconContainer}>
//       <MessageIcon/>
//     </View>
//   </View>
// );

const styles = StyleSheet.create({input: {
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
