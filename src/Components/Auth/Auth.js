import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import {postRegisterUser, postLogin} from "../../Requests/auth"
import {colours} from "../UI/colours"
import { Route, Redirect} from '../../Routing'
import {storeLoginInfo, fetchLoginInfo} from "../../Helpers/storage"
import {Login} from "./Login"
import {Register} from "./Register"

export class Auth extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      register: true
    };
  }

  submitRegisterForm = (username, password, email, mobile) => {
    postRegisterUser(username, email, mobile, password).then(
        (response) => {
          storeLoginInfo(username, password)
          this.props.setWelcomeState(true)
          this.props.setLoggedIn(response.id)
        },
        (error) => {
            this.props.setGlobalError(error.message)
        }
      )
  }

  submitLoginForm = (username, password, autoAttempt = false) => {
    postLogin(username, password).then(
        (response) => {
          if (response.status === "Login Successful") {
              storeLoginInfo(username, password)
              this.props.setLoggedIn(response.id)
          } else {
              this.props.setGlobalError("Something went wrong")
          }
        },
        (error) => {
          if (!autoAttempt) {
            this.props.setGlobalError(error.message)
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

  attemptLogin = () => {
    fetchLoginInfo().then(loginInfo => {
      this.submitLoginForm(loginInfo.username, loginInfo.password, true)
    }, () => {})
  }

  componentWillMount = () => {
    this.attemptLogin()
  }


  render() {
      return (
          <View>
              <View style={styles.container}>
                <View style={styles.overlay}/>
                    <Text style={styles.nalpalHeader} >NalPal</Text>
                    {this.state.register && <Register 
                          submitRegisterForm={this.submitRegisterForm}
                          loginPage={this.loginPage}
                  />}
                  {!this.state.register && <Login 
                  submitLoginForm={this.submitLoginForm}
                  registerPage={this.registerPage}
                 />}
              </View>
          </View>

      ) 
  }

}

export const ErrorText = ({error}) => (
  <View style={styles.errorTextContainer}>
    <Text style={styles.errorText}>
      *{error}
    </Text>
  </View>
);

export const styles = StyleSheet.create({
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
  },
  errorText: {
    textAlign: 'left',
    fontWeight: "bold"
  },
  errorTextContainer: {
    width: '100%',
    marginLeft: 100
  }
});