import React  from 'react'
import { View  } from 'react-native'
import {WideButton} from './UI/WideButton'
import {Header} from "./Navigation/Header"




export class Settings extends React.Component<Props, State> {

  state = {
  }


  render() { 
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