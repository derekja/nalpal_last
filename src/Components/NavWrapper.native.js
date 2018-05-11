import React from 'react'
import { View, StyleSheet, ScrollView} from 'react-native'
import {Information} from './Information'
import {Nav} from './Nav'
import {Header} from './Header'

export class NavWrapper extends React.Component<Props, State> {

  render() {

    return (
      <View style={{flex: 1}}>
        <Header {...this.props}/>
        <ScrollView style={styles.contentContainer}>
          {this.props.children}
        </ScrollView>
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