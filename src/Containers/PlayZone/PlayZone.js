import React from 'react';
import {Droppable} from 'react-beautiful-dnd'
import Card from '../../Components/Card/Card'
import styles from './PlayZone.module.css'

export default class PlayZone extends React.Component {
    render() {
        return(
            <div className={styles.PlayZone}>
                <h3>{this.props.column.title}</h3>
                <Droppable
                    droppableId={this.props.column.id}
                    direction="horizontal"
                    isDropDisabled={this.props.isDropDisabled}
                >
                    {(provided,snapshot)=> {

                        return (
                                <div
                                    className={styles.PlayedCards}
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    /*isDraggingOver={snapshot.isDraggingOver}*/
                                >
                                    {this.props.cards.map((card,index)=><Card played={this.props.column.played} key={card.id} card={card} index={index}/>)}
                                    {provided.placeholder}
                                </div>
                        )
                    }}
                </Droppable>
            </div>
        )

    }
}