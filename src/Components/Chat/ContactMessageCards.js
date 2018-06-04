import React from 'react'
import {CardComponent} from '../UI/CardComponent'
import {AvatarComponent} from '../UI/AvatarComponent'
import { Text, View, StyleSheet} from 'react-native'

class AvatarWrapper extends React.Component<Props, State> {
  
  render() {
    return (
      <CardComponent>
          <View style={styles.cardContainer} >
            <AvatarComponent
                title={this.props.title}
                id={this.props.id}
              />
              <View style={styles.nameContainer} >
                {this.props.children}
              </View>
          </View>
      </CardComponent>

      );
  }
}

export class Contact extends React.Component<Props, State> {

  state = {
  }

  render() { 
    const contactName = this.props.contactName? this.props.contactName : ""
    const initial = contactName.charAt(0)
    return (
      <AvatarWrapper
        title={initial}
        id={this.props.id}
        >
            <Text style={styles.contactName}>
              {contactName}
            </Text>
            {this.props.nickname && <Text>
              ({this.props.nickname})
            </Text>}
      </AvatarWrapper>
    );
  }
}

export class Message extends React.Component<Props, State> {

  state = {
  }

  render() { 
    return (
      <AvatarWrapper
        title={""}
        id={this.props.id}
      >
          <Text style={styles.messageName}>
              {this.props.messageName}
          </Text>
      </AvatarWrapper>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5
  },
  nameContainer: {
    flex: 1,
    marginLeft: 20
  },
  contactName: {
    fontSize: 25,
    fontWeight: "bold"
  },
  messageName: {
    fontSize: 15,
    fontWeight: "bold"
  }
});