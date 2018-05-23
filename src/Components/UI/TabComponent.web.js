import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import {colours} from "./colours"


export class TabComponent extends React.Component<Props, State> {


  handleChange = (value) => {
    this.props.handleTabChange(value)
  };

  render() {
    const tabs = (this.props.tabs).map((label, i) =>
    <Tab buttonStyle={styles.buttonStyle} label={label} key={i} value={i}/>
    );
    return (
      <Tabs
      inkBarStyle={styles.underlineStyle}
        value={this.props.selectedTabIndex}
        onChange={this.handleChange}
        style={styles.backgroundColor}
      >
        {tabs}
      </Tabs>
    );
  }
}

const styles = {
  buttonStyle: {
    color: colours.black,
    backgroundColor: "#FFFFFF",
    fontWeight: 500
  },
  underlineStyle: {
    backgroundColor: colours.primary
  }
}
