import React, { Component } from 'react'
import CustomNavButtonComponent from '../CustomNavButtonComponent'
import styles from './styles.module.css'

class ToolbarComponent extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <h2>Antonio López Garnier</h2>
        </div>
        <div className={styles.containerButtons}>
          <CustomNavButtonComponent text="Home" to="/"></CustomNavButtonComponent>
          <CustomNavButtonComponent text="Work" to="/work"></CustomNavButtonComponent>
          <CustomNavButtonComponent text="Contact" to="/contact"></CustomNavButtonComponent>
        </div>
      </div>
    );
  }
}

export default ToolbarComponent;
