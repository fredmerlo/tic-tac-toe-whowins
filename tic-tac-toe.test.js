const whoWins = require('./tic-tac-toe');

// dash (-) is empty, X is player 1, O is player 2
// ['X','-','O']
// ['O','X','X']
// ['-','-','O']

const emptyBoard = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
const gameInProgressBoard = ['O', '-', 'X', '-', '-', 'O', '-', '-', '-'];
const winnerXTopHorizontalRowBoard = ['X', 'X', 'X', '-', '-', 'O', '-', 'O', '-'];
const winnerOMiddleVerticalColumnBoard = ['X', 'O', 'X', '-', 'O', 'X', '-', 'O', '-'];
const winnerOHorizontalTopRightBoard = ['X', '-', 'O', '-', 'O', 'X', 'O', '-', '-'];
const winnerXHorizontalTopLeftBoard = ['X', '-', 'O', '-', 'X', 'O', '-', '-', 'X'];
const gameIsDrawBoard = ['X', 'O', 'X', 'O', 'O', 'X', '-', 'X', 'O'];

test('whoWins when called with empty board should return "No winner"', () => {
    expect(whoWins(emptyBoard)).toBe('No winner');
});

test('whoWins when called with game in-progress return "No winner"', () => {
    expect(whoWins(gameInProgressBoard)).toBe('No winner');
});

test('whoWins when winner is X on top horizontal row', () => {
    expect(whoWins(winnerXTopHorizontalRowBoard)).toBe('X');
});

test('whoWins when winner is O on middle vertical column', () => {
    expect(whoWins(winnerOMiddleVerticalColumnBoard)).toBe('O');
});

test('whoWins when winner is O on horizontal top right', () => {
    expect(whoWins(winnerOHorizontalTopRightBoard)).toBe('O');
});

test('whoWins when winner is X on horizontal top left', () => {

    expect(whoWins(winnerXHorizontalTopLeftBoard)).toBe('X');
});

test('whoWins when board is a draw return "No winner"', () => {
    expect(whoWins(gameIsDrawBoard)).toBe('No winner');
});
