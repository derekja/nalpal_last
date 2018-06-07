import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight} from 'react-native'
import {TextFieldComponent} from '../UI/TextFieldComponent'
import {WideButton} from "../UI/WideButton"
import {styles} from "./Auth"

export class Login extends React.Component<Props, State> {
  render() { 
    return (
      <View style={styles.formContainer}>
        <TextFieldComponent
          id="username"
          placeholder="Username"
          value={this.props.username}
          onChange={this.props.onTextFieldChange}
        />
        <TextFieldComponent
          id="password"
          placeholder="Password"
          value={this.props.password}
          onChange={this.props.onTextFieldChange}
          password={true}
        />
        <WideButton
          title="Login"
          buttonStyleType = "secondary"
          onPress={this.props.submitLoginForm}
        />
        <TouchableHighlight onPress={this.props.registerPage}>
          <Text>
            Register
          </Text>
        </TouchableHighlight>
  </View>);
  }
}