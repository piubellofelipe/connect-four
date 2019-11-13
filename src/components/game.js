import React from 'react';
import {connect} from 'react-redux'
import gameActions from '../actions/gameActions'
import './game.css'

class Game extends React.Component {
    getColor = (value) => {
        if (value === '1') return '#d33'
        if (value === '2') return '#ffd918'
    }
    setPlayerChoice (x) {
        this.props.setPlayerChoice(x)
    }
    render (){
        return (
            <div className='game-wrapper'>
            {
                this.props.table.map((column, x) => (
                    <div className='column-wrapper'>
                        {
                            column.map((square, y) => (
                                <div className='box' style={{backgroundColor: this.getColor(square)}} key={x + '' + y}
                                    onClick={() => this.setPlayerChoice(x)}>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
        );
    }
}

const mapState = ({gameReducer}) => ({
    table: gameReducer.table,
    currentPlayerTurn: gameReducer.currentPlayerTurn,
    winner: gameReducer.winner
})
  
const {setPlayerChoice} = gameActions
const mapAction = {
    setPlayerChoice
}
  
  export default connect(mapState, mapAction)(Game);