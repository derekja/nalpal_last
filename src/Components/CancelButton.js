//@flow
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

type Props = {
  onPress?: Function,
  title: string,
  buttonStyleType: "main" | "secondary"
}

type State = {

}

export class CancelButton extends React.Component<Props, State> {


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
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
    marginHorizontal: 20

  },
  button: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
    width: 125
  },
  text: {
    textAlign: "center",
    padding: 5,
    fontSize: 20
  }
});