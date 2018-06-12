import React  from 'react'
import { View } from 'react-native'
import MapContainer from '../UI/MapContainer'
import {EmergencyMessageBox} from './EmergencyMessageBox'
import {styles} from "./Emergency"
import {EmergencyRequestButton} from "./EmergencyRequestButton"
import {Header} from "../Navigation/Header"
import {AddressBar} from "./AddressBar"

export class EmergencyResponse extends React.Component<Props, State> {

  cancelResponse = () => {
      this.props.changeState({responder: {}})
  }

  componentWillMount = () => {
    if(!this.props.responder.address || this.props.responder.address === null) {
          this.props.fetchAddress("responder")
      }
  }

  render() {
    const messages = [
    {text:"(Automated message) Thank you for helping me, I am in room 253, the code to the building is 8819, my door is unlocked", senderId: 1}, 
    {text:"This is jeffs friend, we are actually in my room room 321, please hurry", senderId: 1},
    ];

      return (
        <View style={styles.container}>
          <Header emergencyInProgress={this.props.emergencyInProgress} headerTitle="Responding to Request"/>
          <View style={styles.mapContainer}>
              {this.props.responder.address && <AddressBar address={this.props.responder.address}/>}
              <MapContainer requestLocation={this.props.responder.requestLocation} />
          </View>
          <EmergencyMessageBox messages={messages}/>
          <View style={styles.buttonContainer}>
                <EmergencyRequestButton single={true} title="Cancel the Response" onPress={this.cancelResponse}/>
          </View>
        </View>
    );
  }

}
