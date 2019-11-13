import React from 'react';
import {connect} from 'react-redux'
import gameActions from '../actions/gameActions'
import './game.css'
import Modal from 'react-modal';
import PlayerTurn from './playerTurn';

const modalStyle = {
    content : {
      top                   : '20%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Game extends React.Component {
    getColor = (value) => {
        if (value === '1') return '#d33'
        if (value === '2') return '#ffd918'
    }
    setPlayerChoice (x) {
        this.props.setPlayerChoice(x)
    }
    getPlayerName (player) {
        if (player === '1') return 'Player One'
        if (player === '2') return 'Player Two'
    }
    restartGame = () => {
        this.props.restartGame()
    }
    render (){
        return (
            <>
            <div className='game-wrapper'>
                <div className='gameboard-wrapper'>
                    {
                        this.props.table.map((column, x) => (
                            <div className='column-wrapper' onClick={() => this.setPlayerChoice(x)}>
                                <div className='arrow-down' style={{borderTopColor: this.getColor(this.props.currentPlayerTurn)}} />
                                {
                                    column.map((square, y) => (
                                        <div className='box' style={{backgroundColor: this.getColor(square)}} key={x + '' + y} />
                                    ))
                                }
                            </div>
                        ))
                    }         
                </div>
                <PlayerTurn playerName={this.getPlayerName(this.props.currentPlayerTurn)} playerColor={this.getColor(this.props.currentPlayerTurn)} />
            </div>
            <button onClick={this.restartGame}>Play again</button>
            <Modal isOpen={this.props.winner}
                    onRequestClose={this.restartGame}
                    style={modalStyle}
                    contentLabel="Congratulations">
                <h2>{this.getPlayerName(this.props.winner)} has won!</h2>
                <button onClick={this.restartGame}>Play again</button>
            </Modal>
            <Modal isOpen={this.props.plays === 42 && !this.props.winner}
                    onRequestClose={this.restartGame}
                    style={modalStyle}
                    contentLabel="Draw!">
                <h2>Oooh... Seems that no one has won!</h2>
                <button onClick={this.restartGame}>Play again</button>
            </Modal>
        </>
        );
    }
}

const mapState = ({gameReducer}) => ({
    table: gameReducer.table,
    currentPlayerTurn: gameReducer.currentPlayerTurn,
    winner: gameReducer.winner,
    plays: gameReducer.plays
})
  
const {setPlayerChoice, restartGame} = gameActions
const mapAction = {
    setPlayerChoice,
    restartGame
}
  
  export default connect(mapState, mapAction)(Game);