import React  from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {colours} from "../UI/colours"
import {LocationOnIcon} from "../Icons/LocationOnIcon"
import {MyLocationIcon} from "../Icons/MyLocationIcon"

export class AddressBar extends React.Component<Props, State> {


  render() {

      return (
        <View style={styles.addressBarContainer}>
          <View style={styles.leftIcon}>
            <LocationOnIcon/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.locationText}>Your Location:</Text>
            <Text style={styles.addressText}>{this.props.address}</Text>
          </View>
          <View style={styles.rightIcon}>
            <MyLocationIcon/>
          </View>
        </View>
    );
  }

}


const styles = StyleSheet.create({
    addressBarContainer: {
      width: '100%',
      zIndex: 100,
      backgroundColor: "#ffffff"
    },
    textContainer: {
      paddingVertical: 5,
      paddingHorizontal: 35
    },
    addressText: {
      fontSize: 12,
      fontWeight: 'bold'
    },
    locationText: {
      fontSize: 10,
      color: colours.grey
    },
    leftIcon: {
      position: 'absolute',
      left: 0,
      flexDirection: "row",
      alignItems: 'center',
      height: '100%',
      paddingLeft: 5
    },
    rightIcon: {
      position: 'absolute',
      right: 0,
      flexDirection: "row",
      alignItems: 'center',
      height: '100%',
      paddingRight: 5
    }
});