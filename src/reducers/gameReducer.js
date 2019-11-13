import {gameActionTypes} from '../actions/types';
import {checkWin} from '../utils'
const {SET_PLAYER_CHOICE, RESTART_GAME} = gameActionTypes;

const INITIAL_STATE = {
    table: [...Array(7)].map(e => Array(6).fill('0')),
    currentPlayerTurn: '1',
    plays: 0
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
            table: newTable,
            plays: state.plays + 1
        };
    }
    case RESTART_GAME: {
        return {...INITIAL_STATE}
    }
    default:
        return state;
    }
};
