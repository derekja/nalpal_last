import React from 'react'
import { View } from 'react-native'
import {WideButton} from '../WideButton'
import {EmergencyRequest} from './EmergencyRequest'
import {EmergencyResponse} from './EmergencyResponse'
import {EmergencyResponseConfirmation} from './EmergencyResponseConfirmation'
import {EmergencyRequestConfirmation} from './EmergencyRequestConfirmation'

type Props = {
}

export class Emergency extends React.Component<Props, State> {

  state: {

  }

  constructor(props) {
    super()
    if (props.triggerResponderRequest) {
      let contact = null
      if (props.contact) {
        contact = "Jeff185"
      }
      const responder = {
        requestPending: true,
        requestLocation: {
            latitude: 48.428310,
            longitude: -123.368962
          },
        contactName: contact
      }
      props.setResponderState(responder);
    }
  }


  clearResponseData = () => {
    this.props.setResponderState({});
    this.props.setEmergencyInProgress(false);
  }

  clearRequestData = () => {
    this.props.setRequesterState({});
    this.props.setEmergencyInProgress(false);
  }

  acceptRequestToRespond = () => {
      const responder = {
        requestPending: false, 
        requestLocation: this.props.responder.requestLocation
      }
      this.props.setResponderState(responder);
      this.props.setEmergencyInProgress(true);
  }

  sendEmergencyRequest = () => {
    const requester =  { 
        requestType: this.props.requester.requestType,
        confirmationPending: false,
        requestLocation: {
            latitude: 48.428394,
            longitude: -123.349839
          }};
    this.props.setRequesterState(requester);
    this.props.setEmergencyInProgress(true);
  }

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

    let requestLocation= {
      latitude: 48.428394,
      longitude: -123.349839
    }

    if (this.props.requester.requestLocation && !this.props.requester.confirmationPending) {
      return (<EmergencyRequest
                  requester={this.props.requester}
                  clearRequestData={this.clearRequestData}/>);
    } else if (this.props.responder.requestLocation && !this.props.responder.requestPending) {
      return (<EmergencyResponse 
                    clearResponseData={this.clearResponseData}
                    acceptRequestToRespond={this.acceptRequestToRespond}
                    requestLocation={this.props.responder.requestLocation}/>
              );
    } else {
      return (
        <View>
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

}

// <EmergencyResponseConfirmation 
//                   clearResponseData={this.clearResponseData}
//                   acceptRequestToRespond={this.acceptRequestToRespond}
//                   requestLocation={this.props.responder.requestLocation}
//                   contactName={this.props.responder.contactName}
//                   userLocation={this.props.userLocation}
//                   isVisible={this.props.responder.requestPending}/>
        // <WideButton
        //   title="Call 911"
        //   buttonStyleType = "secondary"
        // />
        // <WideButton
        //   title="Send a customized message to friends"
        //   buttonStyleType = "secondary"
        //   onPress={this.openContactConfirmationScreen}
        // />
        // <WideButton
        //   title="Emergency! Get me a Kit!"
        //   buttonStyleType = "main"
        //   onPress={this.openGlobalConfirmationScreen}
        // />


// <EmergencyRequestConfirmation 
//                 requester={this.props.requester}
//                 clearRequestData={this.clearRequestData}
//                 sendEmergencyRequest={this.sendEmergencyRequest}
//                 requestLocation={requestLocation}
//                 isVisible={this.props.requester.confirmationPending}/>
