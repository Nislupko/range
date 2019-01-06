import React, { Component } from 'react';
import {DragDropContext} from 'react-beautiful-dnd'
import initialData from './initial-data'
import Column from "./Containers/PlayZone/PlayZone";

class App extends Component {
    state = initialData;

    onDragEnd = result => {
        const {destination,source,draggableId}=result
        if (!destination){
            return
        }
        if ( destination.droppableId === source.droppableId && destination.index===source.index) {
            return
        }
        const start = this.state.columns[source.droppableId]
        const finish = this.state.columns[destination.droppableId]
        if (start===finish){
            const column = start
            const newCardIds = Array.from(column.cardIds)
            newCardIds.splice(source.index,1)
            newCardIds.splice(destination.index,0,draggableId)
            const newColumn = {
                ...column,
                cardIds: newCardIds
            }
            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                }
            }
            this.setState(newState)
            return
        }
        const startTaskIds = Array.from(start.taskIds)
        startTaskIds.splice(source.index,1)
        const newStart = {
            ...start,
            taskIds: startTaskIds
        }
        const finishTaskIds = Array.from(finish.taskIds)
        finishTaskIds.splice(destination.index,0,draggableId)
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        }
        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]:newStart,
                [newFinish.id]:newFinish
            }
        }
        this.setState(newState)
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div style={{display:'flex'}}>
                    {this.state.columnOrder.map(columnId => {
                        const column = this.state.columns[columnId];
                        const cards = column.cardIds.map(cardId => this.state.cards[cardId]);
                        return <Column key={column.id} column={column} cards={cards} />;
                    })}
                </div>
            </DragDropContext>
        );
    }
}

export default App;
