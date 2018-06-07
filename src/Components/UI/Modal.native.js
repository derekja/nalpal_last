//@flow
import React from 'react'
import {Modal} from "react-native"



export class ModalComponent extends React.Component<Props, State> {

  render() { 
    return (
      <Modal 
       visible={this.props.isVisible? this.props.isVisible : false}
       onRequestClose={() => {}}>
             {this.props.children}
      </Modal>
    );
  }

}