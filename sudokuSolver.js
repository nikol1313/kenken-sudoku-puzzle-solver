// sudoku solver. method backtracking.

// example board
const board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],

    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],

    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

//check if number is in row && col
function checkRowCol(board, row, col, num) {
    for (let i = 0; i < board.length; i++) {
        if (num === board[row][i] || num === board[i][col]) {
            return false;
        }
    }
    return true;
};

// check if num is in square. we use formula.
function checkSquare(board,row, col,  num) {
const X = Math.floor(row / 3) * 3;
const Y = Math.floor(col / 3) * 3;
for (let i = X; i < X + 3; i++) {
    for (let j = Y; j < Y + 3; j++) {
        if (num === board[i][j]) {
            return false;
            }
        }
    }
    return true;
};

// backtracking
function solve(board) {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board.length; y++) {

            if (board[x][y] === 0) {

                for (let num = 1; num <= 9; num++) {

                    if (
                        checkRowCol(board, x, y, num) &&
                        checkSquare(board, x, y, num)
                    ) {
                        // try num
                        board[x][y] = num;

                        // continue solving
                        if (solve(board)) {
                            return true;
                        }

                        // reset because the prev num was bad
                        board[x][y] = 0;
                    }
                }

                // no number 1-9 worked here
                return false;
            }
        }
    }

    // solved
    return true;
}

// node sudokuSolver.js
