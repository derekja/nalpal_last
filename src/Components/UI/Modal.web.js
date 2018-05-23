import React from 'react'
import Dialog from 'material-ui/Dialog'


export class ModalComponent extends React.Component<Props, State> {

  render() { 
    return (
      <Dialog open={this.props.isVisible? this.props.isVisible : false}>
          {this.props.children}
      </Dialog>
    );
  }

}