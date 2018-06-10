import React from 'react'
import { View} from 'react-native'

//Supports material-UI Theme

export class ThemeWrapper extends React.Component<Props, State> {



  render() { 
    return (
        <View style={{flex: 1}}>
        	{this.props.children}
      	</View>
    );
  }

}