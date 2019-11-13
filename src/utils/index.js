export const checkWin = (x, y, newTable, currentPlayerTurn) => {

    let verticalChainCount = 1; // the point he just made in a vertical sequence. now we need to search for 4 others aligned in the same direction
    let horizontalChainCount = 1; // the point he just made in a horizontal sequence.
    let diagonalOneChainCount = 1; // the point he just made in a diagonal sequence.
    let diagonalTwoChainCount = 1; // the point he just made in a diagonal sequence.

    // check for vertical win
    try {
        if (newTable[x][y + 1] === currentPlayerTurn){
            verticalChainCount += 1;
            if (newTable[x][y + 2] === currentPlayerTurn) {
                verticalChainCount += 1;
                if (newTable[x][y + 3] === currentPlayerTurn) {
                    verticalChainCount += 1;
                }
            }
        }
    } catch (error) {
    }

    // check for horizontal win
    try { // we need to count up to three to the left and three to the right
        if (newTable[x - 1][y] === currentPlayerTurn){
             horizontalChainCount += 1;
             if (newTable[x - 2][y] === currentPlayerTurn) { // we only keep counting to this same direction if last position was a +1
                horizontalChainCount += 1;
                if (newTable[x - 3][y] === currentPlayerTurn){
                    horizontalChainCount += 1;
                }
            }
        }
        if (newTable[x + 1][y] === currentPlayerTurn){
             horizontalChainCount += 1;
             if (newTable[x + 2][y] === currentPlayerTurn) { // we only keep counting to this same direction if last position was a +1
                horizontalChainCount += 1;
                if (newTable[x + 3][y] === currentPlayerTurn){
                    horizontalChainCount += 1;
                    }
            }
        }
    } catch (error) {
        
    }

    // check for diagonal (first one) win
    try { // we need to count up to three to the left and three to the right
        if (newTable[x + 1][y + 1] === currentPlayerTurn){
             diagonalOneChainCount += 1;
             if (newTable[x + 2][y + 2] === currentPlayerTurn) { // we only keep counting to this same direction if last position was a +1
                diagonalOneChainCount += 1;
                if (newTable[x + 3][y + 3] === currentPlayerTurn){
                    diagonalOneChainCount += 1;
                }
            }
        }
        if (newTable[x - 1][y - 1] === currentPlayerTurn){
             diagonalOneChainCount += 1;
             if (newTable[x - 2][y - 2] === currentPlayerTurn) { // we only keep counting to this same direction if last position was a +1
                diagonalOneChainCount += 1;
                if (newTable[x - 3][y - 3] === currentPlayerTurn){
                    diagonalOneChainCount += 1;
                }
            }
        }
    } catch (error) {
        
    }
    // check for diagonal (first one) win
    try { // we need to count up to three to the left and three to the right
        if (newTable[x - 1][y + 1] === currentPlayerTurn){
             diagonalOneChainCount += 1;
             if (newTable[x - 2][y + 2] === currentPlayerTurn) { // we only keep counting to this same direction if last position was a +1
                diagonalOneChainCount += 1;
                if (newTable[x - 3][y + 3] === currentPlayerTurn){
                    diagonalOneChainCount += 1;
                }
            }
        }
        if (newTable[x + 1][y - 1] === currentPlayerTurn){
             diagonalOneChainCount += 1;
             if (newTable[x + 2][y - 2] === currentPlayerTurn) { // we only keep counting to this same direction if last position was a +1
                diagonalOneChainCount += 1;
                if (newTable[x + 3][y - 3] === currentPlayerTurn){
                    diagonalOneChainCount += 1;
                }
            }
        }
    } catch (error) {
        
    }
    console.log(verticalChainCount,
        horizontalChainCount,
        diagonalOneChainCount,
        diagonalTwoChainCount)
    return verticalChainCount >=4 || horizontalChainCount >=4 || diagonalOneChainCount >=4 || diagonalTwoChainCount >=4
}