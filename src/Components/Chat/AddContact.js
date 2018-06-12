import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {TextFieldComponent} from "../UI/TextFieldComponent"
import {CancelButton} from "../UI/Buttons/CancelButton"
import {WideButton} from "../UI/Buttons/WideButton"

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
      <View>
        <CancelButton
          title="Back"
          onPress={this.props.closeActionScreen}
          />

        {!this.props.contactState.addContactSuccess && <View style={styles.addContactContainer}>
          <TextFieldComponent
            id="contactUsername"
            placeholder="Contact Username"
            value={this.state.contactUsername}
            onChange={this.onTextFieldChange}
          />
          <WideButton
            title="Send Contact Request"
            buttonStyleType = "secondary"
            onPress={this.sendContactRequest}
          /> 
        </View>}
        {this.props.contactState.addContactSuccess && <View style={styles.addContactContainer}>
          <Text> Friend request sent</Text>
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addContactContainer: {
    flex: 1,
     alignItems: "center"
  }
});
