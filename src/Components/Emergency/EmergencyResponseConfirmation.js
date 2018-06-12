import React from 'react'
import { View } from 'react-native'
import MapContainer from '../UI/MapContainer'
import {ConfirmationMessageBox} from "./ConfirmationMessageBox"
import {EmergencyRequestButton} from "./EmergencyRequestButton"
import assign from "lodash/assign"
import {styles} from "./Emergency"
import {Header} from "../Navigation/Header"
import {AddressBar} from "./AddressBar"


export class EmergencyResponseConfirmation extends React.Component {

  declineRequest = () => {
    this.props.changeState({responder: {}})
  }

  acceptRequestToRespond = () => {
      let responder = this.props.responder
      assign(responder, {requestPending: false})
      this.props.changeState({responder: responder});
  }

  render() {
    const message = "Thank you for helping me, I am in room 253, the code to the building is 8819, my door is unlocked"
    return (
      <View style={styles.container}>
      <Header headerTitle="Request for Help"/>
        <View style={styles.mapContainer}>
            {this.props.responder.address && <AddressBar address={this.props.responder.address}/>}
            <MapContainer requestLocation={this.props.responder.requestLocation} userLocation={this.props.userLocation}/>
            <ConfirmationMessageBox  message={message}/>
        </View>
        <View style={styles.buttonContainer}>
              <EmergencyRequestButton title="Dismiss for Now" onPress={this.declineRequest}/>
              <EmergencyRequestButton confirm={true} title = "Respond to Emergency" onPress={this.acceptRequestToRespond}/>
        </View>
      </View>
    );

  }
}

