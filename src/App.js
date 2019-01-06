import React, { Component } from 'react';
import {DragDropContext} from 'react-beautiful-dnd'
import initialData from './initial-data'
import PlayZone from "./Containers/PlayZone/PlayZone";
import styles from './App.css'

class App extends Component {


    constructor(props) {
        super(props)
        this.state=initialData
        let Cards = []
        for (let key in initialData.cards){
            Cards=[...Cards,initialData.cards[key]]
        }
        console.log(initialData)
        let newCardsIndecies = this.getRand(0,Cards.length,2);
        console.log(Cards)
        let oldCards = Cards.filter((card,i)=>{
            return newCardsIndecies.some(j => {
                return (i===j)
            })
        }).map(card=>card.id)
        let newCards = Cards.filter((card,i)=>{
            return newCardsIndecies.every(j => {
                return (i!==j)
            })
        }).map(card=>card.id)

        this.state.columns['new-cards'].cardIds=newCards
        this.state.columns['old-cards'].cardIds=oldCards
        console.log(this.state)
    }

    getRand(min,max,num) {
        let range = []
        for (let i = min;i<max;i++){
            range=[...range,i]
        }
        let result = []
        for (let j = 0;j<num;j++){
            let r = Math.floor(Math.random()*range.length)
            result=[...result,range[r]]
            range.splice(r,1)
        }
        return result
    }

    onDragStart = start => {
        const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId)
        this.setState({
            homeIndex
        })
    }
    onDragEnd = result => {

        this.setState({
            homeIndex:null
        })
        const {destination,source,draggableId}=result
        if (!destination){
            return
        }
        if ( destination.droppableId === source.droppableId && destination.index===source.index) {
            return
        }
        const start = this.state.columns[source.droppableId]
        const finish = this.state.columns[destination.droppableId]
        if (start===finish) {
            /*const column = start
            const newCardIds = Array.from(column.cardIds)
            newCardIds.splice(source.index, 1)
            newCardIds.splice(destination.index, 0, draggableId)
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
            this.setState(newState)*/
            return
        }
        const startCardIds = Array.from(start.cardIds)
        startCardIds.splice(source.index,1)
        const newStart = {
            ...start,
            cardIds: startCardIds
        }
        const finishCardIds = Array.from(finish.cardIds)
        finishCardIds.splice(destination.index,0,draggableId)

        const newFinish = {
            ...finish,
            cardIds: finishCardIds
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
        if (this.state.columns["new-cards"].cardIds.length===0) {alert("Congratulations!")}
    }

    render(){
        return (
            <DragDropContext
                onDragStart={this.onDragStart}
                onDragEnd={this.onDragEnd}
            >
                <div className={styles.App}>
                    {this.state.columnOrder.map((columnId,index) => {
                        const column = this.state.columns[columnId];
                        const cards = column.cardIds.map(cardId => this.state.cards[cardId]);
                        const isDropDisabled = index <= this.state.homeIndex
                        return <PlayZone
                                    isDropDisabled={isDropDisabled}
                                    key={column.id}
                                    column={column}
                                    cards={cards}
                                />;
                    })}
                </div>
            </DragDropContext>
        );
    }
}

export default App;
