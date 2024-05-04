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

whoWins = (board) => {
    let players = { 'X': new Array(8).fill(0), 'O': new Array(8).fill(0) };

    // Board is a flattened 3x3 so always 9 elements
    for(let i = 0; i < weights.length; i++) {
        const sums = combinationLookup[i];
        const currentPlayer = players[board[i]];

        if(currentPlayer) {
            sums.forEach((sum) => {
                currentPlayer[sum] += weights[i];
            });
        }

        if(isWinner(players, 'X') || isWinner(players, 'O')) {
            return isWinner(players, 'X') || isWinner(players, 'O');
        }
    }

    return 'No winner';
};

isWinner = (players, player) => players[player].includes(15) ? player : null;

module.exports = whoWins;
