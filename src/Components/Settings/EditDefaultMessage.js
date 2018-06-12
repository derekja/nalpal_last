import React  from 'react'
import { View } from 'react-native'
import {WideButton} from '../UI/Buttons/WideButton'
import {Header} from "../Navigation/Header"
import {MultiLineTextFieldComponent} from "../UI/MultiLineTextFieldComponent"
import {storeDefaultMessage, fetchDefaultMessage} from "../../Helpers/storage"

export class EditDefaultMessage extends React.Component<Props, State> {

	constructor(props) {
	  super(props);
	  this.state = {
	  	defaultMessage: this.props.defaultMessage
	  };
	}

	onMessageChange = (id, text) => {
	    this.setState({defaultMessage: text})
	}

	setDefaultMessage = () => {
		storeDefaultMessage(this.state.defaultMessage)
			.then(
				() => {
					this.props.changeState({defaultMessage: this.state.defaultMessage})
					this.props.closeEditMessage()
				}
			)
	}

	componentWillMount = () => {
		if (this.props.defaultMessage === null) {
		    fetchDefaultMessage().then(
		      (message) => {
		          this.props.changeState({defaultMessage: message})
		      }
		    )
		}

	}

  	render() { 
    	return (
        	<View>
	        	<Header headerTitle="Set Emergency Message"/>
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