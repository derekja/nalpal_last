import React from 'react'
import { View, StyleSheet} from 'react-native'
import MapContainer from "../UI/MapContainer"
import {ConfirmationMessageBox} from "./ConfirmationMessageBox"
import {EmergencyRequestButton} from "./EmergencyRequestButton"
import {fetchDefaultMessage} from "../../Helpers/storage"


export class EmergencyRequestConfirmation extends React.Component {

  cancelRequest = () => {
    this.props.changeState({requester: {}})
  }

  sendEmergencyRequest = () => {
    const requester =  { 
        requestType: this.props.requester.requestType,
        confirmationPending: false,
        requestLocation: this.props.requester.requestLocation
      };
    this.props.changeState({requester: requester});
  }

  componentWillMount = () => {
      if (this.props.defaultMessage == null) {
          fetchDefaultMessage().then(
            (message) => {
                this.props.changeState({defaultMessage: message})
            }
          )
      }
  }

  render() {
    const defaultMessage = "Thank you for helping me, I am in room 253, the code to the building is 8819, my door is unlocked"
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
            <MapContainer requestLocation={this.props.requestLocation} />
            <ConfirmationMessageBox userMessage={true} message={this.props.defaultMessage}/>
        </View>
        <View style={styles.buttonContainer}>
              <EmergencyRequestButton title="Cancel" onPress={this.cancelRequest}/>
              <EmergencyRequestButton confirm={true} title = "Confirm Call for Kit" onPress={this.sendEmergencyRequest}/>
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