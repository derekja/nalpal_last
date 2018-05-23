import React  from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {colours} from "../UI/colours"

export class ConfirmationMessageBox extends React.Component<Props, State> {


  render() {

      return (
        <View style={styles.boxContainer}>
          <View style={styles.messageHeader}>
            <Text style={styles.headerText}>{this.props.userMessage? "Message:" : "Their Message:"}</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>
              {this.props.message}
            </Text>
          </View>
        </View>
    );
  }

}

const styles = StyleSheet.create({
    messageHeader: {
      backgroundColor: colours.primary,
      opacity: 0.8,
      width: 200,
      marginHorizontal: 20,
      marginVertical: 5
    },
    headerText: {
      color: "#ffffff",
      textAlign: "center",
      fontSize: 18
    },
    messageContainer: {
      marginHorizontal: 20,
      marginBottom: 30,
      backgroundColor: "#ffffff"
    },
    messageText: {
      fontSize: 18
    },
    boxContainer: {
      position: "absolute",
      bottom: 0,
      zIndex: 10
    }
});
