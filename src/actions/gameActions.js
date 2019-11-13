import {gameActionTypes} from './types';

const { SET_PLAYER_CHOICE, RESTART_GAME } = gameActionTypes;

const setPlayerChoice = (columnIndex) => async (dispatch, getState) => {
    const currentPlayerTurn = getState().gameReducer.currentPlayerTurn
    const table = getState().gameReducer.table
    const selectedColumn = table[parseInt(columnIndex)]
    const hasMovementIntCurrentColumn = selectedColumn[0] === '0';
    if (!hasMovementIntCurrentColumn) return; // column is full
    const availableColPosition = selectedColumn.findIndex((square, index) => selectedColumn[index + 1] !== '0')
    // if (availableColPosition < 0) return;
    dispatch({type: SET_PLAYER_CHOICE, payload: {x: columnIndex, y: availableColPosition, currentPlayerTurn}})
}

const restartGame = () => dispatch => {
    dispatch({type: RESTART_GAME})
}

export default {
    setPlayerChoice,
    restartGame
};