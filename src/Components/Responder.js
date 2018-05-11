import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import {Map} from './Map'
import {postReportEmergency} from '../Requests/emergencyRequester'
import {RequestButton} from '../Components/RequestButton'
import {postRespondToEmergency} from '../Requests/emergencyResponder'

export class Responder extends React.Component {

  state = {
    emergencyRequest: {
    	latitude: 37.78825,
    	longitude: -122.4324,
    }
  }

  onKitRequest = () => {
    postReportEmergency().then(status => this.updateState(status))
  }

  updateState = (status) => {
      this.setState({
        emergencyRequest: {
          lat: status.statusCode,
          message: status.statusDescription
        }
      })
  }

  render() {
  	const markerCoord: LatLng = {
  		latitude: this.state.emergencyRequest.latitude,
  		longitude: this.state.emergencyRequest.longitude
  	}
    return (
      <Map/>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});