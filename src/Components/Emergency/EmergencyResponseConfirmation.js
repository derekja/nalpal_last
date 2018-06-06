import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapContainer from '../UI/MapContainer'
import {ConfirmationMessageBox} from "./ConfirmationMessageBox"
import {EmergencyRequestButton} from "./EmergencyRequestButton"


export class EmergencyResponseConfirmation extends React.Component {

  declineRequest = () => {
    this.props.changeState({responder: {}})
  }

  acceptRequestToRespond = () => {
      const responder = {
        requestPending: false, 
        requestLocation: this.props.responder.requestLocation
      }
      this.props.changeState({responder: responder});
  }

  render() {
    const message = "Thank you for helping me, I am in room 253, the code to the building is 8819, my door is unlocked"
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
            <MapContainer requestLocation={this.props.requestLocation} userLocation={this.props.userLocation}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapContainer: {
    flex: 1
  }, 
  buttonContainer: {
    flexDirection: "row",
    height: 55
  }
});

