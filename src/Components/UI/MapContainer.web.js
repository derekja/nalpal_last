import React from 'react'
import {Map, Marker} from 'google-maps-react';


class MapContainer extends React.Component<Props, State> {


  render() {
    var iconURL = require('../../Images/myLocation.web.png')
    return (
      <Map google={window.google} zoom={14}
        style={style}
        initialCenter={{
            lat: this.props.requestLocation.latitude,
            lng: this.props.requestLocation.longitude
          }}
      >
      {this.props.requestLocation &&  <Marker
          position= {{lat: this.props.requestLocation.latitude, lng: this.props.requestLocation.longitude}}
          />}
      {this.props.userLocation &&  <Marker
          position= {{lat: this.props.userLocation.latitude, lng: this.props.userLocation.longitude}}
          icon={{
                url: iconURL
              }}
          />}
      
      </Map>
    );
  }

}

const style = {
  height: "100%",
  width: "100%"
}

export default MapContainer
