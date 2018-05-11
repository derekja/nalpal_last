import React, { Component } from 'react'
import {Marker} from 'google-maps-react';
import MapContainer from './MapContainer';


export class Map extends React.Component {

  render() {
    return (
      <MapContainer>
        {this.props.children}
      </MapContainer>
    );
  }
}

export class MapMarker extends React.Component<Props, State> {

  render() {
    return (
      <Marker
      position={{lat: 40.854885, lng: -88.081807}}
      >
      </Marker>
    );
  }
}