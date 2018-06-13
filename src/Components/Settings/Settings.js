import React  from 'react'
import { View  } from 'react-native'
import {WideButton} from '../UI/Buttons/WideButton'
import {Header} from "../Navigation/Header"
import {EditDefaultMessage} from "./EditDefaultMessage"

export class Settings extends React.Component<Props, State> {

	constructor(props) {
	  super(props);
	  this.state = {
	  	editDefaultMessageScreenOpen: false
	  };
	}

	openEditMessage = () => {
		this.setState({editDefaultMessageScreenOpen: true})
	}

	closeEditMessage = () => {
		this.setState({editDefaultMessageScreenOpen: false})
	}

	createTestRequest = () => {
		const responder = {
		  requestPending: true,
		  requestLocation: {
		      latitude: 48.428310,
		      longitude: -123.368962
		    }
		}
		const userLocation = {
			latitude: 48.429200,
		    longitude: -123.362755
		}
		this.props.changeState({responder: responder, userLocation: userLocation})
	}

  	render() { 
	  	if (this.state.editDefaultMessageScreenOpen) {
	  		return (
	  			<EditDefaultMessage 
	  				closeEditMessage={this.closeEditMessage}
	  				defaultMessage={this.props.defaultMessage}
	  				changeState={this.props.changeState}
	  			/>
	  		)
	  	} else {
	  	    return (
	  	        <View>
	  	        	<Header headerTitle="Settings" emergencyInProgress={this.props.emergencyInProgress}/>
	  		        <WideButton
	  		          title="Update Kit Status"
	  		          buttonStyleType = "secondary"
	  		        />
	  		        <WideButton
	  		          title="Set Defaults and Emergency Message"
	  		          buttonStyleType = "secondary"
	  		          onPress={this.openEditMessage}
	  		        />
	  		        <WideButton
	  		          title="Set Respond Distance"
	  		          buttonStyleType = "secondary"
	  		        />
	  		        <WideButton
	  		          title="Log Out"
	  		          buttonStyleType = "secondary"
	  		          onPress={this.props.logOut}
	  		        />
	  		        <WideButton
	  		          title="Trigger responder screen"
	  		          buttonStyleType = "secondary"
	  		          onPress={this.createTestRequest}
	  		        />
	  	     	</View>
	  	    );
	  	}
  	}

}