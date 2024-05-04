whoWins = (board) => {
    // Aka Magic Square, technically here it be a Magic List
    const weights = [8, 1, 6, 3, 5, 7, 4, 9, 2];
    let players = { 'X': { sum: 0, count: 0}, 'O': { sum: 0, count: 0 } };

    // Board is a flattened 3x3 so always 9 elements
    for(let i = 0; i < weights.length; i++) {
        if(players[board[i]]) {
            players[board[i]].sum += weights[i];
            players[board[i]].count++;
        }
    }

    return isWinner(players, 'X') || isWinner(players, 'O') || 'No winner';
};

isWinner = (players, player) => players[player].sum === 15 && players[player].count === 3 ? player : null;

module.exports = whoWins;
