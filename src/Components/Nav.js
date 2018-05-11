//@flow
import React from 'react'
import { View, StyleSheet } from 'react-native'
import NavButton from './NavButton'

export type NavButtonType = "Emergency" | "Chat" | "Information" | "Settings";

type Props = {
  updateSelectedNavToggle: (NavButtonType) => void,
  selectedNavToggle: NavButtonType
}

export class Nav extends React.Component<Props, State> {


  render() {
    let emergencyNavButton = <NavButton type={"Emergency"} title="Emergency" active={this.props.selectedNavToggle === "Emergency"} updateSelectedNavToggle={this.props.updateSelectedNavToggle}/>;
    if (this.props.emergencyInProgress && !(this.props.selectedNavToggle === "Emergency")) {
      emergencyNavButton = <NavButton type={"Emergency"} title="Emergency In Progress" emergencyInProgress={this.props.emergencyInProgress} active={this.props.selectedNavToggle === "Emergency"} updateSelectedNavToggle={this.props.updateSelectedNavToggle}/>
    }
    return (
        <View
          style={styles.navContainer} className="Nav"
        >
          <View style={styles.navStyles}>
             {emergencyNavButton}
             <NavButton type={"Chat"} title="Chat" active={this.props.selectedNavToggle === "Chat"} updateSelectedNavToggle={this.props.updateSelectedNavToggle}/>
             <NavButton type={"Information"} title="Information" active={this.props.selectedNavToggle === "Information"} updateSelectedNavToggle={this.props.updateSelectedNavToggle}/>
             <NavButton type={"Settings"} title="Settings" noMargin={true} active={this.props.selectedNavToggle === "Settings"} updateSelectedNavToggle={this.props.updateSelectedNavToggle}/>
          </View>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  navContainer: {
    height: 60,
  },
  navStyles: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});
