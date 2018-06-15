import React from 'react'
import { View} from 'react-native'
import MapContainer from "../UI/MapContainer"
import {ConfirmationMessageBox} from "./ConfirmationMessageBox"
import {ActionButton, buttonContainerStyles} from "../UI/Buttons/ActionButton"
import {fetchDefaultMessage} from "../../Helpers/storage"
import {styles} from "./Emergency"
import {AddressBar} from "./AddressBar"
import assign from "lodash/assign"
import {Header} from "../Navigation/Header"


export class EmergencyRequestConfirmation extends React.Component {

  cancelRequest = () => {
    this.props.changeState({requester: {}})
  }

  sendEmergencyRequest = () => {
    let requester = this.props.requester
    assign(requester, {confirmationPending: false})
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
      if(this.props.requester.address === null) {
          this.props.fetchAddress("requester")
      }
  }

  render() {
    const defaultMessage = "Thank you for helping me, I am in room 253, the code to the building is 8819, my door is unlocked"
    return (
      <View style={styles.container}>
        <Header headerTitle="Confirm Call for a Kit" emergencyInProgress={this.props.emergencyInProgress}/>
        {this.props.requester.address && <AddressBar address={this.props.requester.address}/>}
        <View style={styles.mapContainer}>
            <MapContainer requestLocation={this.props.requester.requestLocation} />
            <ConfirmationMessageBox userMessage={true} message={this.props.defaultMessage}/>
        </View>
        <View style={buttonContainerStyles.buttonContainer}>
              <ActionButton type={"light"} title="Cancel" onPress={this.cancelRequest}/>
              <ActionButton type={"emergency"} title = "Confirm Call for Kit" onPress={this.sendEmergencyRequest}/>
        </View>
      </View>
    );

  }
}