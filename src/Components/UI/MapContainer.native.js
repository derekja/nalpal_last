import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native'
import {postReportEmergency} from '../../Requests/emergencyRequester'
import {postRespondToEmergency} from '../../Requests/emergencyResponder'
import MapView from 'react-native-maps';

 class MapContainer extends React.Component {

  render() {
    const {height, width} = Dimensions.get('window');
  	const markerCoord: LatLng = {
  		latitude: this.props.requestLocation.latitude,
  		longitude: this.props.requestLocation.longitude
  	}
    return (
      <MapView
        style={{ flex: 1, height: (height - 130), width: width}}
        initialRegion={{
          latitude: this.props.requestLocation.latitude,
          longitude: this.props.requestLocation.longitude,
          latitudeDelta: 0.0272,
          longitudeDelta: 0.0271,
        }}
      >
        {this.props.userLocation && <MapView.Marker
          coordinate={this.props.userLocation}
          title="myLocation"
          image={require('../../Images/myLocation.native.png')}
         />}
         <MapView.Marker
          coordinate={markerCoord}
          title="emergency"
         />
      </MapView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default MapContainer;
