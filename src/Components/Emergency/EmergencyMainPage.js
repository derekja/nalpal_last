import React  from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {colours} from "../UI/colours"
import {WideButton} from '../UI/WideButton'
import {Header} from "../Navigation/Header"

export class EmergencyMainPage extends React.Component<Props, State> {


  openGlobalConfirmationScreen = () => {
      const requester = { 
        requestType: "GLOBAL_REQUEST",
        confirmationPending: true,
        requestLocation: {
            latitude: 48.428394,
            longitude: -123.349839
          }};
      this.props.setRequesterState(requester);
  }
  
  openContactConfirmationScreen = () => {
      const requester = { 
        requestType: "CONTACT_REQUEST",
        confirmationPending: true,
        requestLocation: {
            latitude: 48.428394,
            longitude: -123.349839
          }};
      this.props.setRequesterState(requester);
  }

  render() {

      return (
        <View>
        <Header headerTitle="Emergency"/>
        <WideButton
          title="Call 911"
          buttonStyleType = "secondary"
        />
        <WideButton
          title="Send a customized message to friends"
          buttonStyleType = "secondary"
          onPress={this.openContactConfirmationScreen}
        />
        <WideButton
          title="Emergency! Get me a Kit!"
          buttonStyleType = "main"
          onPress={this.openGlobalConfirmationScreen}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
    messageHeader: {
      backgroundColor: colours.primary,
      opacity: 0.8,
      width: 200,
      marginHorizontal: 20,
      marginVertical: 5
    },
    headerText: {
      color: "#ffffff",
      textAlign: "center",
      fontSize: 18
    },
    messageContainer: {
      marginHorizontal: 20,
      marginBottom: 30,
      backgroundColor: "#ffffff"
    },
    messageText: {
      fontSize: 18
    },
    boxContainer: {
      position: "absolute",
      bottom: 0,
      zIndex: 10
    }
});