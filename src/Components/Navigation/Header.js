
import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {colours} from "../UI/colours"


export class Header extends React.Component<Props, State> {


  render() { 
    return (
        <View>
          {this.props.emergencyInProgress && 
            <View style={styles.activeEmergencyContainer}>
              <Text style={styles.activeEmergencyText}>ACTIVE EMERGENCY</Text>
            </View>
          }
          <View
            style={styles.container}
          >
            <Text style={styles.headerText}>
              {this.props.headerTitle}
            </Text>
          </View>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.primary,
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "500"
  },
  activeEmergencyContainer: {
    backgroundColor: colours.emergency,
    width: "100%",
    height: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  activeEmergencyText: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "500"
  }
});