import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapContainer from '../UI/MapContainer'
import {EmergencyMessageBox} from './EmergencyMessageBox'
import {ModalComponent} from "../UI/Modal"
import {ModalButton} from "../UI/ModalButton"
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

const ContactRequestModal = ({requestLocation, messages, contactName, acceptRequestToRespond, clearResponseData, isVisible}) => (
  <ModalComponent isVisible={isVisible}>
        <Text style={styles.heading}>
          Urgent Message From a Contact
        </Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoColumn}>
            <EmergencyMessageBox messages={messages}/>
          </View>
          <View style={styles.infoColumn}>
            <Text>One of your contacts {contactName} has requested help can you respond? They are 1.4 km away, and currently, two other people have responded.</Text>
            <View style={styles.mapWrapper}>
              <MapContainer requestLocation={requestLocation}/>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <ModalButton
            title="I cannot Respond"
            onPress={clearResponseData}
          />
          <ModalButton
            title="Reply to message"
          />
          <ModalButton
            title="Yes, I can respond"
            onPress={acceptRequestToRespond}
          />
        </View>
      </ModalComponent>
);

const GeneralRequestModal = ({requestLocation, acceptRequestToRespond, clearResponseData, isVisible}) => (
  <ModalComponent isVisible={isVisible}>
        <Text style={styles.heading}>
          Help Requested
        </Text>
        <Text style={styles.centeredText}>
            Someone 400m away has urgently requested a Naloxone kit. Currently, no-one else has responded, can you respond?
        </Text>
        <View style={styles.mapWrapper}>
              <MapContainer requestLocation={requestLocation}/>
        </View>
        <View style={styles.buttonContainer}>
          <ModalButton
            title="I cannot Respond"
            onPress={clearResponseData}
          />
          <ModalButton
            title="Yes, I can respond"
            onPress={acceptRequestToRespond}
          />
        </View>
    </ModalComponent>
);

