import React from 'react'
import { View, Text, TouchableHighlight} from 'react-native'
import {TextFieldComponent} from '../UI/TextFieldComponent'
import {WideButton} from "../UI/WideButton"
import {styles, ErrorText} from "./Auth"
import assign from "lodash/assign"
import {validateForm} from "../../Helpers/formValidation"

export class Login extends React.Component<Props, State> {

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
        validations: ["required"]
      }
    };
  }

  onTextFieldChange = (id, value) => {
    let field = assign(this.state[id], {value: value})
    this.setState({[id]: field});
  }

  submitLoginForm = () => {
    const validation = validateForm([this.state.username, this.state.password])
    this.setState({
        username: validation.validatedFields[0],
        password: validation.validatedFields[1],
      })
    if (!validation.hasErrors) {
      this.props.submitLoginForm(this.state.username.value, this.state.password.value)
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
        <WideButton
          title="Login"
          buttonStyleType = "secondary"
          onPress={this.submitLoginForm}
        />
        <TouchableHighlight onPress={this.props.registerPage}>
          <Text>
            Register
          </Text>
        </TouchableHighlight>
  </View>);
  }
}