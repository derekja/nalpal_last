import React from 'react'
import {View} from "react-native"
import {EmergencyRequest} from './EmergencyRequest'
import {EmergencyResponse} from './EmergencyResponse'
import {EmergencyResponseConfirmation} from './EmergencyResponseConfirmation'
import {EmergencyRequestConfirmation} from './EmergencyRequestConfirmation'
import {EmergencyMainPage} from "./EmergencyMainPage"


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


  render() {

    let requestLocation= {
      latitude: 48.428394,
      longitude: -123.349839
    }

    let page = {}

    if (this.props.requester.requestLocation) {
      if (this.props.requester.confirmationPending) {
        page = <EmergencyRequestConfirmation 
                requester={this.props.requester}
                clearRequestData={this.clearRequestData}
                sendEmergencyRequest={this.sendEmergencyRequest}
                requestLocation={requestLocation}
                isVisible={this.props.requester.confirmationPending}/>
      } else {
          page = <EmergencyRequest
                  requester={this.props.requester}
                  clearRequestData={this.clearRequestData}/>
      }
    } else if (this.props.responder.requestLocation) {
        if (this.props.responder.confirmationPending) {
            page = <EmergencyResponseConfirmation 
                  clearResponseData={this.clearResponseData}
                  acceptRequestToRespond={this.acceptRequestToRespond}
                  requestLocation={this.props.responder.requestLocation}
                  contactName={this.props.responder.contactName}
                  userLocation={this.props.userLocation}
                  isVisible={this.props.responder.requestPending}/>
        } else {
          page = <EmergencyResponse 
                    clearResponseData={this.clearResponseData}
                    acceptRequestToRespond={this.acceptRequestToRespond}
                    requestLocation={this.props.responder.requestLocation}/>
        }
    } else {
      page = <EmergencyMainPage setRequesterState={this.props.setRequesterState}/>
    }

    return (
      <View>
          {page}
      </View>
    )
  }

}

