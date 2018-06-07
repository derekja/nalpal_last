import React from 'react'
import {Card} from 'material-ui/Card';


export class CardComponent extends React.Component<Props, State> {


  render() { 
    return (
      <Card
      	style={styles.cardStyles}

      >
      	{this.props.children}
      </Card>
    );
  }
}

const styles = {
	cardStyles: {
		margin: "10px 0"
	}
}
