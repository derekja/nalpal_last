import React from 'react'
import { View, StyleSheet, ScrollView} from 'react-native'
import {Nav} from './Nav'

export class NavWrapper extends React.Component<Props, State> {

  render() {

    return (
      <View style={{flex: 1}}>
          {this.props.children}
        {this.props.displayNav && <Nav {...this.props}/>}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  }
});