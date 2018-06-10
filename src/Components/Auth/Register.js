import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet} from 'react-native'
import {TextFieldComponent} from '../UI/TextFieldComponent'
import {WideButton} from "../UI/WideButton"
import {styles, ErrorText} from "./Auth"
import assign from "lodash/assign"
import {validateForm} from "../../Helpers/formValidation"

export class Register extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: null,
        error: null,
        validations: ["required"]
      },
      password: {
        value: null,
        error: null,
        validations: ["required", "password"]
      },
      email: {
        value: null,
        error: null,
        validations: ["required", "email"]
      },
      mobile: {
        value: null,
        error: null,
        validations: ["required", "phonenumber"]
      }
    };
  }

  onTextFieldChange = (id, value) => {
    let field = assign(this.state[id], {value: value})
    this.setState({[id]: field});
  }
  submitRegisterForm = () => {
    const validation = validateForm([this.state.username, this.state.password, this.state.email, this.state.mobile])
    this.setState({
        username: validation.validatedFields[0],
        password: validation.validatedFields[1],
        email: validation.validatedFields[2],
        mobile: validation.validatedFields[3]
      })
    if (!validation.hasErrors) {
      this.props.submitRegisterForm(this.state.username.value, this.state.password.value, this.state.email.value, this.state.mobile.value)
    }
  }

  render() { 
    return (
      <View style={styles.formContainer}>
            <TextFieldComponent
              id="username"
              placeholder="Username"
              value={this.state.username.value}
              onChange={this.onTextFieldChange}
            />
            {this.state.username.error && <ErrorText error={this.state.username.error}/>}
            <TextFieldComponent
              id="password"
              placeholder="Password"
              value={this.state.password.value}
              onChange={this.onTextFieldChange}
              password={true}
            />
            {this.state.password.error && <ErrorText error={this.state.password.error}/>}
            <TextFieldComponent
              id="email"
              placeholder="Email"
              value={this.state.email.value}
              onChange={this.onTextFieldChange}
            />
            {this.state.email.error && <ErrorText error={this.state.email.error}/>}
            <TextFieldComponent
              id="mobile"
              placeholder="Mobile"
              value={this.state.mobile.value}
              onChange={this.onTextFieldChange}
            />
            {this.state.mobile.error && <ErrorText error={this.state.mobile.error}/>}
            <WideButton
              title="Register"
              buttonStyleType = "secondary"
              onPress={this.submitRegisterForm}
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