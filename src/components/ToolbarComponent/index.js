import React, { Component } from 'react'
import CustomButtonComponent from '../CustomButtonComponent'
import * as styles from './styles.css'

class ToolbarComponent extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h2>Antonio López Garnier</h2>
        </div>
        <div className="container-buttons">
          <CustomButtonComponent text="Home"></CustomButtonComponent>
          <CustomButtonComponent text="Work"></CustomButtonComponent>
          <CustomButtonComponent text="Contact"></CustomButtonComponent>
        </div>
      </div>
    );
  }
}

export default ToolbarComponent;
