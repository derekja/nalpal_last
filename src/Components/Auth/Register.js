import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight} from 'react-native'
import {TextFieldComponent} from '../UI/TextFieldComponent'
import {WideButton} from "../UI/WideButton"
import {styles} from "./Auth"

export class Register extends React.Component<Props, State> {
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
            <TextFieldComponent
              id="email"
              placeholder="Email"
              value={this.props.email}
              onChange={this.props.onTextFieldChange}
            />
            <TextFieldComponent
              id="mobile"
              placeholder="Mobile"
              value={this.props.mobile}
              onChange={this.props.onTextFieldChange}
            />
            <WideButton
              title="Register"
              buttonStyleType = "secondary"
              onPress={this.props.submitRegisterForm}
            />
            <TouchableHighlight onPress={this.props.loginPage}>
              <Text
              >
                Login
              </Text>
            </TouchableHighlight>
      </View>);
  }
}