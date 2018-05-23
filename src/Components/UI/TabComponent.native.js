import React from 'react'
import {ButtonGroup} from 'react-native-elements'
import {StyleSheet} from "react-native"
import {colours} from "./colours"


export class TabComponent extends React.Component<Props, State> {

  constructor () {
    super()
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
  	this.props.handleTabChange(selectedIndex)
  }

  render() { 

        return (
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={this.props.selectedTabIndex}
            buttons={this.props.tabs}
            containerStyle={{height: 100}}
            buttonStyle={styles.buttonStyle}
            selectedButtonStyle={styles.selectedButtonStyle}
            containerStyle={styles.containerStyle}
            innerBorderStyle={{width: 0, color: "#ffffff"}}
            textStyle={styles.textStyle}
            selectedTextStyle={styles.textStyle}
          />
    );
  }
}

const styles = StyleSheet.create({
	buttonStyle: {
		borderWidth: 0,
	},
	selectedButtonStyle: {
		backgroundColor: "#ffffff",
		borderBottomWidth: 5,
		borderColor: colours.primary
	},
	containerStyle: {
		height: 55,
		borderWidth: 0,
		marginLeft: 0,
		marginRight: 0,
		marginTop: 0, 
		marginBottom: 0,
		borderRadius: 0
	},
	textStyle: {
		color: colours.black,
		fontWeight: "500",
		fontSize: 25,
	}
});