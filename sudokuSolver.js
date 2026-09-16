// sudoku solver. method greedy.

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

// insert random nums
function insertNums(board) {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board.length; y++) {
            if (board[x][y] === 0) {
              for (let i = 1; i < 10; i++) {
                if (checkRowCol(board, x , y, i) &&
                    checkSquare(board, x, y, i)) {
                        board[x][y] = i;          
                        break;  
                    }
                }
            }
         }
    }
    return board
};

// this method is bad/ in the next implementation 
// ill add backtracking to solve recursivly 
// and undo if solving failed in the end
