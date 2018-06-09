import React  from 'react'
import { View  } from 'react-native'
import {WideButton} from '../UI/WideButton'
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
	  	        	<Header headerTitle="Settings"/>
	  		        <WideButton
	  		          title="Update Kit Status"
	  		          buttonStyleType = "secondary"
	  		        />
	  		        <WideButton
	  		          title="Set Privacy Level"
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
	  	     	</View>
	  	    );
	  	}
  	}

}