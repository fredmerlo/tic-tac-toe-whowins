const validCombinations = [
    [0,0], [0,4], [0,7], [1,0],
    [1,5], [2,0], [2,3], [2,6],
    [3,1], [3,4], [4,1], [4,3],
    [4,5], [4,7], [5,1], [5,6],
    [6,2], [6,4], [6,3], [7,2],
    [7,5], [8,2], [8,6], [8,7]];

const combinationLookup = validCombinations.reduce((acc, [key, value]) => {
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(value);
    return acc;
}, {});

// Aka Magic Square, technically here it be a Magic List
const weights = [8, 1, 6, 3, 5, 7, 4, 9, 2];

const WINNING_COMBINATION_TOTAL = 15;

whoWins = (board) => {
    let players = { 'X': new Array(8).fill(0), 'O': new Array(8).fill(0) };

    // Board is a flattened 3x3 so always 9 elements
    for(let i = 0; i < weights.length; i++) {
        const sums = combinationLookup[i];
        let currentPlayer = players[board[i]];

        if(currentPlayer) {
            // sum valid combinations
            currentPlayer = sums.reduce((acc, sum) => {
                acc[sum] += weights[i];
                return acc;
            }, currentPlayer);
        }

        const winner = isWinner(players, 'X') || isWinner(players, 'O');
        if(winner) {
            return winner;
        }
    }

    return 'No winner';
};

isWinner = (players, player) => players[player].includes(WINNING_COMBINATION_TOTAL) ? player : null;

module.exports = whoWins;
