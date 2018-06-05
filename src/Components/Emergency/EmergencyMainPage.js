import React  from 'react'
import { View } from 'react-native'
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
      this.props.changeState({requester: requester})
  }
  
  openContactConfirmationScreen = () => {
      const requester = { 
        requestType: "CONTACT_REQUEST",
        confirmationPending: true,
        requestLocation: {
            latitude: 48.428394,
            longitude: -123.349839
          }};
      this.props.changeState({requester: requester})
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