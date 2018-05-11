import React from 'react'
import Avatar from 'material-ui/Avatar'
import {generateAvatarColour} from "../colours"


export class AvatarComponent extends React.Component<Props, State> {

  render() { 
  	const color = generateAvatarColour(this.props.id) 
    return (
      <Avatar
      	size={40}
      	backgroundColor={color}
      	src={this.props.source? this.props.source : null}
      	style={{margin: "5px", minWidth: "40px"}}
      >
      	{this.props.title}
      </Avatar>
    );
  }
}