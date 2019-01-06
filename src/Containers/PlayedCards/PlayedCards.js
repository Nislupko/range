import React, { Component } from 'react';
import styles from './PlayedCards.module.css'

class PlayedCards extends Component {
  render() {
    return (
        <div className={styles.PlayedCards}>
            {this.props.children}
        </div>
    )
  }
}

export default PlayedCards
