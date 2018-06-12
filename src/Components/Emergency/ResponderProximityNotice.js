import React  from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {colours} from "../UI/colours"

export class ResponderProximityNotice extends React.Component<Props, State> {


  render() {

      return (
          <View style={styles.proximityContainer}>
            <Text style={styles.proximityText}>Nearest person is ~0.8km away</Text>
          </View>
    );
  }

}

const styles = StyleSheet.create({
    proximityContainer: {
      backgroundColor: colours.primary,
      opacity: 0.8,
      maxWidth: 300,
      marginHorizontal: 20,
      marginVertical: 5,
      zIndex: 100,
      position: 'absolute',
      bottom: 0,
      right: 0
    },
    proximityText: {
      textAlign: "center",
      fontSize: 15,
      paddingHorizontal: 5
    }
});
