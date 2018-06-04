import React  from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapContainer from '../UI/MapContainer'
import {EmergencyMessageBox} from './EmergencyMessageBox'
import {CancelButton} from '../UI/CancelButton'

export class EmergencyResponse extends React.Component<Props, State> {

  cancelResponse = () => {
      this.props.changeState({responder: {}})
  }

  render() {
    const messages = [
    {text:"(Automated message) Thank you for helping me, I am in room 253, the code to the building is 8819, my door is unlocked", senderId: 1}, 
    {text:"This is jeffs friend, we are actually in my room room 321, please hurry", senderId: 1},
    ];

      return (
        <View>
          <CancelButton
            title="Cancel Response"
            onPress={this.cancelResponse}
          />
            <Text style={styles.textBox}>
              There is currently 1 other person who has also responded, you are closest at 250m away, the next closest is 550m away
            </Text>
          <View style={styles.mapContainer}>
            <MapContainer requestLocation={this.props.requestLocation}/>
          </View>
          <EmergencyMessageBox textInput={true} messages={messages}/>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  textBox: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    maxWidth: 250
  },
  mapContainer: {
    height: 200,
    marginVertical: 10
  },
});
