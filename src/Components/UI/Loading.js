import React from 'react'
import {View, ActivityIndicator, StyleSheet} from "react-native"
import {colours} from './colours'

const withLoadingScreen = (WrappedComponent) => {
  return class LoadingScreen extends React.PureComponent {
    render() {
      if (this.props.loading) {
      	return (
      		<View style={styles.loadingContainer}>
      			<ActivityIndicator size="large" color={colours.primary} />
      		</View>
      		)
      } else{
      	return (<WrappedComponent {...this.props} />)
      }
    }
  };
};

const styles = StyleSheet.create({
  loadingContainer: {
  	flex: 1,
  	justifyContent: "center"
  }
});

export default withLoadingScreen;

