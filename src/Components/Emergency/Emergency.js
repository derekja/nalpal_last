import React from 'react'
import {View} from "react-native"
import {EmergencyRequest} from './EmergencyRequest'
import {EmergencyResponse} from './EmergencyResponse'
import {EmergencyResponseConfirmation} from './EmergencyResponseConfirmation'
import {EmergencyRequestConfirmation} from './EmergencyRequestConfirmation'
import {EmergencyMainPage} from "./EmergencyMainPage"


export class Emergency extends React.Component<Props, State> {

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


  render() {

    let page = {}

    if (this.props.requester.requestLocation) {
      if (this.props.requester.confirmationPending) {
        page = <EmergencyRequestConfirmation 
                requester={this.props.requester}
                defaultMessage={this.props.defaultMessage}
                changeState={this.props.changeState}
                requestLocation={this.props.requester.requestLocation}
                isVisible={this.props.requester.confirmationPending}/>
      } else {
          page = <EmergencyRequest
                  requester={this.props.requester}
                  changeState={this.props.changeState}/>
      }
    } else if (this.props.responder.requestLocation) {
        if (this.props.responder.confirmationPending) {
            page = <EmergencyResponseConfirmation
                  changeState={this.props.changeState}
                  requestLocation={this.props.responder.requestLocation}
                  contactName={this.props.responder.contactName}
                  userLocation={this.props.userLocation}
                  isVisible={this.props.responder.requestPending}/>
        } else {
          page = <EmergencyResponse 
                    changeState={this.props.changeState}
                    requestLocation={this.props.responder.requestLocation}/>
        }
    } else {
      page = <EmergencyMainPage getLocation={this.props.getLocation} changeState= {this.props.changeState} />
    }

    return (
      <View style={{flex: 1}}>
          {page}
      </View>
    )
  }

}

