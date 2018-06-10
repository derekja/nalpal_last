import React from 'react'
import { View} from 'react-native'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Supports material-UI Theme
const googleApiKey = "AIzaSyA7yHY-qcFGvp3PUuPgqTlftPYOknKA270"
export class ThemeWrapper extends React.Component<Props, State> {
	
	//Loads the googlemaps api
	componentDidMount () {
        const script = document.createElement("script");

        script.src = "https://maps.googleapis.com/maps/api/js?key=" + googleApiKey;
        script.async = true;

        document.body.appendChild(script);
    }

  render() { 
    return (
    	//Required for material-ui
    	<MuiThemeProvider>
	        <View style={{flex: 1}}>
	        	{this.props.children}
	      	</View>
	     </MuiThemeProvider>
    );
  }

}