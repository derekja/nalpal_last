
import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {colours} from "./colours"


export class Header extends React.Component<Props, State> {


  render() { 
    return (
        <View
          style={styles.container}
        >
          <Text style={styles.headerText}>
            {this.props.selectedNavToggle}
          </Text>
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
  }
});