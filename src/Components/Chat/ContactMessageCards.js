import React from 'react'
import {CardComponent} from '../UI/CardComponent'
import {AvatarComponent} from '../UI/AvatarComponent'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'

class AvatarWrapper extends React.Component<Props, State> {
  
  render() {
    return (
      <CardComponent>
        <TouchableOpacity
          onPress={this.props.onPress}
        >
            <View style={styles.cardContainer} >
              <AvatarComponent
                  title={this.props.title}
                  index={this.props.index}
                />
                <View style={styles.nameContainer} >
                  {this.props.children}
                </View>
            </View>
        </TouchableOpacity>
      </CardComponent>

      );
  }
}

export class Contact extends React.Component<Props, State> {

  state = {
  }

  onPress = () => {
    const selectedContact = {
        id: this.props.id, 
        username: this.props.contactName,
        nickname: this.props.nickname
    }
    this.props.onPress(selectedContact)
  }

  render() { 
    const contactName = this.props.contactName? this.props.contactName : ""
    const initial = this.props.pending? "!" : contactName.charAt(0)
    const pendingTitle = "Friend Request: " + contactName

    return (
      <AvatarWrapper
        title={initial}
        index={this.props.index}
        onPress={this.onPress}
        >
            <Text style={this.props.pending? styles.pending : styles.contactName}>
              {this.props.pending? pendingTitle : contactName}
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
        index={this.props.index}
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
  pending: {
    fontSize: 15,
    fontWeight: "bold"
  },
  messageName: {
    fontSize: 15,
    fontWeight: "bold"
  }
});