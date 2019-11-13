import React from 'react'

export default ({playerName, playerColor}) => {
    return <div className='player-turn-box'>
        <h4>{playerName.toUpperCase()} TURN</h4>
        <div style={{backgroundColor: playerColor}} className='player-turn-show-color'></div>
    </div>
}