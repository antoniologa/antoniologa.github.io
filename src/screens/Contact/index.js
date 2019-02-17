import React, { Component } from 'react';
import styles from './styles.module.css'

class Contact extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Contact me by email:</h1>
        <h2 className={styles.subtitle}>antoniolopezgarnier@gmail.com</h2>
      </div>
    );
  }
}

export default Contact;
