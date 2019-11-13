import {gameActionTypes} from '../actions/types';
import {checkWin} from '../utils'
const {SET_PLAYER_CHOICE} = gameActionTypes;

const INITIAL_STATE = {
    table: [...Array(7)].map(e => Array(6).fill('0')),
    currentPlayerTurn: '1'
};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
    case SET_PLAYER_CHOICE: {
        const newTable = state.table.map(line => line.slice())
        const {x, y, currentPlayerTurn} = action.payload;
        newTable[x][y] = currentPlayerTurn;
        const isAWin = checkWin(x, y, newTable, currentPlayerTurn);
        return {
            ...state,
            currentPlayerTurn: currentPlayerTurn === '1' ? '2' : '1',
            winner: isAWin ? currentPlayerTurn : '',
            table: newTable
        };
    }
    default:
        return state;
    }
};
