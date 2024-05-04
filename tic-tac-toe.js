whoWins = (board) => {
    // Aka Magic Square, technically here it be a Magic List
    const weights = [8, 1, 6, 3, 5, 7, 4, 9, 2];

    let sumX = 0, sumO = 0;
    let countX = 0, countO = 0;

    // Board is a flattened 3x3 so always 9 elements
    for(let i = 0; i < 9; i++) {
        switch(board[i]) {
            case 'X':
                sumX += weights[i];
                countX++;
                break;
            case 'O':
                sumO += weights[i];
                countO++;
                break;
            default:
                break;
        }
    }

    if(sumX === 15 && countX === 3) {
        return 'X';
    }
    
    if(sumO === 15 && countO === 3) {
        return 'O';
    }

    return 'No winner';
}

module.exports = whoWins;
