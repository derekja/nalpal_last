import React from 'react'
import { View} from 'react-native'
import {WideButton} from './UI/WideButton'



export class Information extends React.Component<Props, State> {

  state = {
  }


  render() { 
    return (
        <View>
	        <WideButton
	          title="Watch the Tutorial"
	          buttonStyleType = "secondary"
	        />
	        <WideButton
	          title="How to Use a Kit"
	          buttonStyleType = "secondary"
	        />
	        <WideButton
	          title="Your Rights"
	          buttonStyleType = "secondary"
	        />
	        <WideButton
	          title="Dope Guide"
	          buttonStyleType = "secondary"
	        />
	        <WideButton
	          title="Third Party Resources"
	          buttonStyleType = "secondary"
	        />
      </View>
    );
  }

}