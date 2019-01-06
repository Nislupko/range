import React, { Component } from 'react';
import styles from './Card.module.css'
import {Draggable} from "react-beautiful-dnd"

class Card extends Component {
  render() {
    return (

        <Draggable
            draggableId={this.props.card.id}
            index={this.props.index}
        >
            {(provided,snapshot) => (
                    <div
                        className={styles.Card}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        <h1>{this.props.card.title}</h1>
                        <div className={styles.Price}>{this.props.card.price}</div>
                    </div>
            )
            }

        </Draggable>
        /*

        */
    )
  }
}

export default Card
