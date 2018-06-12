import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {TextFieldComponent} from "../UI/TextFieldComponent"
import {ActionButton, buttonContainerStyles} from "../UI/Buttons/ActionButton"

export class AddContact extends React.Component<Props, State> {
  
  constructor(props) {
    super(props);
    this.state = {
      contactUsername: ""
    };
  }

  onTextFieldChange = (id, value) => {
      this.setState({[id]: value})
  }

  sendContactRequest = () => {
      this.props.addFriend(this.state.contactUsername)
  }

  render() {
    return (
      <View style={{flex: 1}}>

        {!this.props.contactState.addContactSuccess && <View style={styles.addContactContainer}>
          <TextFieldComponent
            id="contactUsername"
            placeholder="Contact Username"
            value={this.state.contactUsername}
            onChange={this.onTextFieldChange}
          />
        </View>}
        {this.props.contactState.addContactSuccess && <View style={styles.addContactContainer}>
          <Text> Friend request sent</Text>
        </View>}
        {!this.props.contactState.addContactSuccess && <View style={buttonContainerStyles.buttonContainer}>
              <ActionButton type={"light"} title="Cancel" onPress={this.props.closeActionScreen}/>
              <ActionButton type={"dark"} title = "Add" onPress={this.sendContactRequest}/>
        </View>}
        {this.props.contactState.addContactSuccess && <View style={buttonContainerStyles.buttonContainer}>
              <ActionButton single={true} type={"light"} title="Back" onPress={this.props.closeActionScreen}/>
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addContactContainer: {
    flex: 1,
     alignItems: "center",
     justifyContent: "center"
  }
});
