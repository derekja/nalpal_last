import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {CheckboxComponent} from "../UI/CheckboxComponent"
import {colours} from "../UI/colours"

export class SelectContact extends React.Component<Props, State> {
  
  render() {
    return (
      <View style={styles.selectionContainer}>
        <CheckboxComponent/>
        <View style={styles.textContainer}>
          <Text>
          {this.props.text}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    textContainer: {
      backgroundColor: colours.lightBlue,
      paddingHorizontal: 20
    },
    selectionContainer: {
      backgroundColor: colours.lightBlue,
      flexDirection: "row",
      flex: 1,
      width: 200,
      margin: 10
    }
});
