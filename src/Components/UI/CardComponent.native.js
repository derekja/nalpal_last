import React from 'react'
import {Card} from 'react-native-elements'


export class CardComponent extends React.Component<Props, State> {

  render() { 
    return (
      <Card>
      	{this.props.children}
      </Card>
    );
  }
}
