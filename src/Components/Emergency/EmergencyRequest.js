import React from 'react'
import { View } from 'react-native'
import MapContainer from "../UI/MapContainer"
import {ActionButton, buttonContainerStyles} from "../UI/Buttons/ActionButton"
import {Header} from "../Navigation/Header"
import {AddressBar} from "./AddressBar"
import {ResponderProximityNotice} from "./ResponderProximityNotice"
import {EmergencyMessageBox} from "./EmergencyMessageBox"
import {styles} from "./Emergency"
import withLoadingScreen from "../UI/Loading"

class EmergencyRequest extends React.Component {

  cancelRequest = () => {
      this.props.changeState({requester: {}})
  }

  componentWillMount = () => {
    if (!this.props.requester.requestLocation.latitude) {
        this.props.getRequestLocation()
      }
  }

  render() {
    const messages = [
    {text:"(Automated message) Thank you for helping me, I am in room 253, the code to the building is 8819, my door is unlocked", senderId: 1}, 
    {text:"This is jeffs friend, we are actually in my room room 321, please hurry", senderId: 1},
    ];

    return (
      <View style={styles.container}>
        <Header headerTitle="Request for Help Sent" emergencyInProgress={this.props.emergencyInProgress}/>
        {this.props.requester.address && <AddressBar address={this.props.requester.address}/>}
        <View style={styles.mapContainer}>
            <MapContainer requestLocation={this.props.requester.requestLocation} />
            <ResponderProximityNotice/>
        </View>
        <EmergencyMessageBox messages={messages}/>
        <View style={buttonContainerStyles.buttonContainer}>
              <ActionButton type={"dark"} single={true} title="Cancel the Call" onPress={this.cancelRequest}/>
        </View>
      </View>

    );
  }

}

export default withLoadingScreen(EmergencyRequest)