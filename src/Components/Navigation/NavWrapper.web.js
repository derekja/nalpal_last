import React from 'react'
import { View, StyleSheet } from 'react-native'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Nav} from './Nav'

export class NavWrapper extends React.Component<Props, State> {

  render() {

    return (
      <MuiThemeProvider>
        <View style={styles.flexContainer}>
          <View style={this.props.displayNav? styles.contentContainerWithNav : styles.contentContainerNoNav}>
            {this.props.children}
          </View>
          {this.props.displayNav && <View style={styles.navPosition}>
            <Nav {...this.props}/>
          </View>}
        </View>
      </MuiThemeProvider>
    );
  }

}

const styles = StyleSheet.create({
  contentContainerWithNav: {
    marginBottom: 40,
    flex: 1
  },
  contentContainerNoNav: {
    marginBottom: 0,
    flex: 1
  },
  navPosition: {
    position: 'fixed',
    bottom: 0,
    width: '100%'
  },
  flexContainer: {
    flex: 1
  }
});