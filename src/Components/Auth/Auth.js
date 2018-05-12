import React from 'react'
import { View, StyleSheet, Text, ImageBackground,TouchableHighlight} from 'react-native'
import {TextFieldComponent} from '../UI/TextFieldComponent'
import {postRegisterUser, postLogin} from "../../Requests/auth"
import {WideButton} from "../WideButton"
import {colours} from "../colours"

export class Auth extends React.Component<Props, State> {

  state = {
    username: null,
    password: null,
    email: null,
    mobile: null,
    register: true
  }

  onTextFieldChange = (id, value) => {
    this.setState({[id]: value});
  }

  submitRegisterForm = () => {
    postRegisterUser(this.state.username, this.state.email, this.state.mobile, this.state.password).then(
        (response) => {
        this.props.setLoggedIn(response.id)
        }
      )
  }

  submitLoginForm = () => {
    postLogin(this.state.username, this.state.password).then(
        (response) => {
          if (response.status == "Login Successful") {
              this.props.setLoggedIn(response.id)
          }
        }
      )
  }

  loginPage = () => {
    this.setState({register: false});
  }

  registerPage = () => {
    this.setState({register: true});
  }


  render() {
      return (
        <View>
        <ImageBackground style={styles.container} source={require('../../Images/street.jpg')}>
        <View style={styles.overlay}/>
            <Text style={styles.nalpalHeader} >NalPal</Text>
            {this.state.register && <Register 
          onTextFieldChange={this.onTextFieldChange} 
          username={this.state.username}
          password={this.state.password}
          mobile={this.state.mobile}
          email={this.state.email}
          submitRegisterForm={this.submitRegisterForm}
          loginPage={this.loginPage}
          />}
          {!this.state.register && <Login 
          onTextFieldChange={this.onTextFieldChange} 
          username={this.state.username}
          password={this.state.password}
          submitLoginForm={this.submitLoginForm}
          registerPage={this.registerPage}
         />}
        </ImageBackground>
        </View>
      ) 
  }

}

const Login = ({onTextFieldChange, submitLoginForm, registerPage, username, password}) => (
  <View style={styles.formContainer}>
        <TextFieldComponent
          id="username"
          placeholder="Username"
          value={username}
          onChange={onTextFieldChange}
        />
        <TextFieldComponent
          id="password"
          placeholder="Password"
          value={password}
          onChange={onTextFieldChange}
          password={true}
        />
        <WideButton
          title="Login"
          buttonStyleType = "secondary"
          onPress={submitLoginForm}
        />
        <TouchableHighlight onPress={registerPage}>
          <Text>
            Register
          </Text>
        </TouchableHighlight>
  </View>
);

const Register = ({onTextFieldChange, submitRegisterForm, loginPage, username, password, email, mobile}) => (
  <View style={styles.formContainer}>
        <TextFieldComponent
          id="username"
          placeholder="Username"
          value={username}
          onChange={onTextFieldChange}
        />
        <TextFieldComponent
          id="password"
          placeholder="Password"
          value={password}
          onChange={onTextFieldChange}
          password={true}
        />
        <TextFieldComponent
          id="email"
          placeholder="Email"
          value={email}
          onChange={onTextFieldChange}
        />
        <TextFieldComponent
          id="mobile"
          placeholder="Mobile"
          value={mobile}
          onChange={onTextFieldChange}
        />
        <WideButton
          title="Register"
          buttonStyleType = "secondary"
          onPress={submitRegisterForm}
        />
        <TouchableHighlight onPress={loginPage}>
          <Text
          >
            Login
          </Text>
        </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colours.primary,
    opacity: 0.7
  },
  formContainer: {
    width: "100%",
    alignItems: "center"
  },
  nalpalHeader: {
    color: "#FFFFFF",
    fontSize: 50,
    textAlign: "center",
    zIndex: 10,
    marginVertical: 30
  }
});