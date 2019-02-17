import React, { Component } from 'react';
import styles from './styles.module.css'
class Work extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Now working for <br/> <a className={styles.link} href="https://www.anorak.life/">Anorak Technologies</a></h1>
      </div>
    );
  }
}

export default Work;
