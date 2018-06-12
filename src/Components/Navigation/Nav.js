import React from 'react'
import { View, StyleSheet } from 'react-native'
import NavButton from './NavButton'
import {colours} from "../UI/colours"


export class Nav extends React.Component<Props, State> {

  getCurrentNavToggle = () => {

    const regex = new RegExp("[^/]+", "i")
    const match = regex.exec(this.props.location.pathname)
    return (match[0])
  }

  render() {
    const path = this.getCurrentNavToggle()
    let emergencyNavButton = <NavButton type={"emergency"} title="Emergency" active={path === "emergency"}/>;
    if (this.props.emergencyInProgress && !(path === "emergency")) {
      emergencyNavButton = <NavButton type={"emergency"} title="Active Emergency" emergencyInProgress={this.props.emergencyInProgress} active={this.props.selectedNavToggle === "Emergency"} />
    }
    return (
        <View
          style={styles.navContainer} className="Nav"
        >
          <View style={styles.navStyles}>
             {emergencyNavButton}
             <NavButton type={"chat"} title="Chat" active={path === "chat"} />
             <NavButton type={"information"} title="Information" active={path === "information"} />
             <NavButton type={"settings"} title="Settings" noMargin={true} active={path === "settings"} />
          </View>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  navContainer: {
    height: 60,
    backgroundColor: colours.primary
  },
  navStyles: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});
