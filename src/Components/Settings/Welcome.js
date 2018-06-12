import React  from 'react'
import { View, Text } from 'react-native'
import {WideButton} from '../UI/Buttons/WideButton'
import {Header} from "../Navigation/Header"
import {MultiLineTextFieldComponent} from "../UI/MultiLineTextFieldComponent"
import {storeDefaultMessage} from "../../Helpers/storage"

export class Welcome extends React.Component<Props, State> {

	constructor(props) {
	  super(props);
	  this.state = {
	  	defaultMessage: "Hi, this is a sample message. I need help. I'm in unit 4. Code to the building is 4356. Thanks"
	  };
	}

	onMessageChange = (id, text) => {
	    this.setState({defaultMessage: text})
	}

	setDefaultMessage = () => {
		storeDefaultMessage(this.state.defaultMessage)
			.then(
				() => {
					this.props.setWelcomeState(false)
					this.props.changeState({defaultMessage: this.state.defaultMessage})
				}
			)
	}

  	render() { 
  		const welcomeMessage = "Start by setting up a default emergency message. " +
  								"This message will be sent to your contacts if you send an emergency request. " + 
	    "We recommend including things such as your unit/apartment number, or the code to your building. " +
	    "You can edit this later in your settings"
    	return (
        	<View>
	        	<Header headerTitle="Welcome"/>
	        	<Text>
	        		Welcome to NalPal!
	        	</Text>
	        	<Text>
	        		{welcomeMessage}
	        	</Text>
	        	<MultiLineTextFieldComponent 
	        		value={this.state.defaultMessage} 
	        		onChange={this.onMessageChange} 
	        		id="defaultMessage"/>
	        	<WideButton
	        	  title="Set Default Message"
	        	  buttonStyleType = "secondary"
	        	  onPress={this.setDefaultMessage}
	        	/>

      		</View>
    	);
  	}

}