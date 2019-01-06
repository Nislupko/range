import React from 'react';
import {Droppable} from 'react-beautiful-dnd'
import Card from '../../Components/Card/Card'
import PlayedCards from '../PlayedCards/PlayedCards'
import styles from './PlayZone.module.css'

export default class Column extends React.Component {
    render() {
        return(
            <div className={styles.PlayZone}>
                <h3>{this.props.column.title}</h3>
                <Droppable
                    droppableId={this.props.column.id}
                    direction="horizontal"
                >
                    {(provided,snapshot)=> {
                        console.log(provided.innerRef)
                        return (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    isDraggingOver={snapshot.isDraggingOver}
                                >
                                    <PlayedCards>
                                        {this.props.cards.map((card,index)=><Card key={card.id} card={card} index={index}/>)}
                                        {provided.placeholder}
                                    </PlayedCards>
                                </div>
                        )
                    }}
                </Droppable>
            </div>
        )

    }
}