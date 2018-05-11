import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

type Props = {
  onPress?: Function,
  title: string,
}

export class ModalButton extends React.Component<Props, State> {

  state = {
  }


  render() { 
    return (
        <View
          style={styles.container}
        >
           <TouchableOpacity
            style={styles.button}
            onPress={this.props.onPress}
          >
              <Text style={styles.text}>
              {this.props.title}
              </Text>
            </TouchableOpacity>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    maxWidth: "30%"
  },
  button: {
    borderRadius: 5,
    backgroundColor: "lightgrey",
  },
  text: {
    textAlign: "center",
    color: "black",
    padding: 3,
    fontSize: 20
  },
});