import React  from 'react'
import { View  } from 'react-native'
import {WideButton} from '../Components/WideButton'




export class Settings extends React.Component<Props, State> {

  state = {
  }


  render() { 
    return (
        <View>
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
      </View>
    );
  }

}