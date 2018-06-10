import React from 'react'
import { View} from 'react-native'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Supports material-UI Theme

export class ThemeWrapper extends React.Component<Props, State> {



  render() { 
    return (
    	<MuiThemeProvider>
	        <View style={{flex: 1}}>
	        	{this.props.children}
	      	</View>
	     </MuiThemeProvider>
    );
  }

}