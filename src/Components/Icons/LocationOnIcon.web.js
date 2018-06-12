import React from 'react'
import LocationOn from 'material-ui/svg-icons/communication/location-on'
import {colours} from '../UI/colours'


export class LocationOnIcon extends React.Component<Props, State> {

  render() { 
    return (
      <LocationOn color={colours.grey}/>
    );
  }

}