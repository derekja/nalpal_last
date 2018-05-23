import React from 'react'
import { View, StyleSheet} from 'react-native'
import MapContainer from "../UI/MapContainer"
import {ConfirmationMessageBox} from "./ConfirmationMessageBox"
import {EmergencyRequestButton} from "./EmergencyRequestButton"


export class EmergencyRequestConfirmation extends React.Component {

  render() {
    const defaultMessage = "Thank you for helping me, I am in room 253, the code to the building is 8819, my door is unlocked"
    let confirmationText;
    if (this.props.requester.requestType === "CONTACT_REQUEST") {
      confirmationText = "This will send preset emergency message to all contacts"
    } else {
      confirmationText = "Will request help from all nearby people, and all contacts with kits"
    }
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
            <MapContainer requestLocation={this.props.requestLocation} />
            <ConfirmationMessageBox userMessage={true} message={defaultMessage}/>
        </View>
        <View style={styles.buttonContainer}>
              <EmergencyRequestButton title="Cancel" onPress={this.props.clearRequestData}/>
              <EmergencyRequestButton confirm={true} title = "Confirm Call for Kit" onPress={this.props.sendEmergencyRequest}/>
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
    flex: 1,
  }, 
  buttonContainer: {
    flexDirection: "row",
    height: 55
  }
});