import React from 'react'
import {View, StyleSheet} from "react-native"
import {EmergencyRequest} from './EmergencyRequest'
import {EmergencyResponse} from './EmergencyResponse'
import {EmergencyResponseConfirmation} from './EmergencyResponseConfirmation'
import {EmergencyRequestConfirmation} from './EmergencyRequestConfirmation'
import {EmergencyMainPage} from "./EmergencyMainPage"
import {fetchAddress} from "../../Helpers/googleMapsApi"
import assign from "lodash/assign"


export class Emergency extends React.Component<Props, State> {

  constructor(props) {
    super()
  }

  fetchAddress = (requestType) => {
    if (requestType !== "requester" && requestType !== "responder") {
      return null
    }
    let requestObject = this.props[requestType]
    if (requestObject.requestLocation) {
      fetchAddress(requestObject.requestLocation).then(
          (address) => {
            assign(requestObject, {address: address})
            this.props.changeState({[requestType]: requestObject})
          },
          (error) => {
            assign(requestObject, {address: "address unavailable"})
            this.props.changeState({[requestType]: requestObject})
          }
        )
    }
  }


  render() {

    let page = {}

    if (this.props.requester.requestLocation) {
      if (this.props.requester.confirmationPending) {
        page = <EmergencyRequestConfirmation 
                fetchAddress={this.fetchAddress}
                requester={this.props.requester}
                defaultMessage={this.props.defaultMessage}
                changeState={this.props.changeState}
                emergencyInProgress={this.props.emergencyInProgress}
                isVisible={this.props.requester.confirmationPending}/>
      } else {
          page = <EmergencyRequest
                  fetchAddress={this.fetchAddress}
                  requester={this.props.requester}
                  defaultMessage={this.props.defaultMessage}
                  emergencyInProgress={this.props.emergencyInProgress}
                  changeState={this.props.changeState}/>
      }
    } else if (this.props.responder.requestLocation) {
        if (this.props.responder.requestPending) {
            page = <EmergencyResponseConfirmation
                  fetchAddress={this.fetchAddress}
                  emergencyInProgress={this.props.emergencyInProgress}
                  changeState={this.props.changeState}
                  contactName={this.props.responder.contactName}
                  userLocation={this.props.userLocation}
                  responder={this.props.responder}
                  isVisible={this.props.responder.requestPending}/>
        } else {
          page = <EmergencyResponse 
                    userLocation={this.props.userLocation}
                    changeState={this.props.changeState}
                    fetchAddress={this.fetchAddress}
                    emergencyInProgress={this.props.emergencyInProgress}
                    responder={this.props.responder}/>
        }
    } else {
      page = <EmergencyMainPage emergencyInProgress={this.props.emergencyInProgress} getLocation={this.props.getLocation} changeState= {this.props.changeState} />
    }

    return (
      <View style={{flex: 1}}>
          {page}
      </View>
    )
  }

}

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapContainer: {
    flex: 1,
  }

});


