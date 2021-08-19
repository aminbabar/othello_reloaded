let num = 0;
class BoardState {
    
    constructor() {
        this.board = BoardState.createBoard();
        // black is the first player in othello
        this.currentPlayer = "black";
        this.BOARDWIDTH = 8;
        this.BOARDLENGTH = 8;
    }
    

    // A static method that would return a board that is set up!
    static createBoard() {
        let BOARDLENGTH = 8;
        let BOARDWIDTH = 8;
        let board = [];
        for (let i = 0; i < BOARDLENGTH; i++) {
            let row = [];
            for (let j = 0; j < BOARDWIDTH; j++) {
                row.push(null);
            }
            board.push(row);
        }

        // Setting up the initial board
        board[3][3] = "white";
        board[4][4] = "white";
        board[3][4] = "black";
        board[4][3] = "black";

        return board;
    }

    static oppColor(color) {
        if (color === "black") return "white";
        return "black";
    }

    static nextPlayerColor(currentPlayerColor) {
        if (currentPlayerColor === white) return "black";
        return "white"
    }


}

// Returns all the moves for the current player 
BoardState.prototype.availableMoves = function () {
    let moves = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (this.validMove([i, j], this.currentPlayer)) {
                moves.push([i, j]);
            }
        }
    }
    return moves;
}

BoardState.prototype.getBoard = function() {
    return this.board;
}

BoardState.prototype.getCurrentPlayer = function() {
    return this.currentPlayer;
}

// returns true if the current position is within bounds, else false
BoardState.prototype.validPos = function(pos) {
    let posR = pos[0];
    let posC = pos[1];
    if (posR > 7 || posR < 0 || posC > 7 || posC < 0) {
        return false;
    }
    return true;
}


// returns true if a valid move can be made at the given position by the given
// player
BoardState.prototype.validMove = function(pos, player) {
    if (!this.validPos(pos)) return false;

    let dirs = [1, 0, -1];

    let posR = pos[0];
    let posC = pos[1];

    if (this.board[posR][posC] !== null) return false;
    for (const dr of dirs) {
        for (const dc of dirs) {
            if (dr == 0 && dc == 0) continue;
            // console.log(posR, dr, posC, dc);
            if ((this.movesInDir(posR, dr,  posC, dc)).length > 0) return true
        }
    }
    return false;
}



// flips the color of the piece at the given pos
BoardState.prototype.flip = function(pos) {
    // debugger;
    this.board[pos[0]][pos[1]] = this.currentPlayer;
}



// Returns true if a piece of the current players color is flanking pieces of another
// player in a given direciton.
BoardState.prototype.movesInDir = function (r, dr, c, dc, positions = []) {
    // debugger;
    if (!this.validPos([r + dr, c + dc])) return [];
    let currPiece = this.board[r + dr][c + dc];

    if (!currPiece) return [];

    // if flanking condition is true
    if (currPiece === this.currentPlayer && positions.length > 0) {
        return positions;
    } 
    // false if trying to make a move next to our own color in that direction
    else if (currPiece === this.currentPlayer) {
        return [];
    }


    if (currPiece === BoardState.oppColor(this.currentPlayer)) {
        positions.push([r + dr, c + dc]);
        return this.movesInDir(r + dr, dr, c + dc, dc, positions)
    }
}


// 

// Should only be called on valid moves. Does not check for validity.
BoardState.prototype.makeMove = function(pos) {
    num += 1;
    // debugger;
    const r = pos[0];
    const c = pos[1];

    let moves = [];
    const dirs = [1, 0, -1];

    for (const dr of dirs) {
        for (const dc of dirs) {

            if (dr === 0 && dc === 0) continue;
            // console.log(r, dr, c, dc);
            // debugger;
            moves = moves.concat(this.movesInDir(r, dr, c, dc));
        }
    }

    // flip all the relevant pieces for the current move
    if (moves.length > 0) this.board[r][c] = this.currentPlayer;
    // debugger;
    for (let move of moves) {
        this.flip(move);
    }

    this.currentPlayer = BoardState.oppColor(this.currentPlayer);
    // this.printBoard();
}



BoardState.prototype.count = function (color) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (this.board[i][j] === color) count += 1;
        }
    }
    return count;
}


BoardState.prototype.gameOver = function() {
    if (this.availableMoves().length === 0) {
        
        // Flips the move if the current player has zero moves remaining
        this.currentPlayer = BoardState.oppColor(this.currentPlayer);
        if (this.availableMoves().length !== 0) {
            // debugger;
            return false;
        }

        console.log("GAME OVER!")
        console.log(num);
        if (this.count("black") > this.count("white")) {
            return "black";
        } else if (this.count("black") > this.count("white")) {
            return "white";
        } else {
            return "draw";
        }
    }
    return false;
}


BoardState.prototype.testMove = function(arr) {
    for (let ele of arr) {
        this.board[ele[0]][ele[1]] = "MOVE";
    }
}

BoardState.prototype.reverseTestMove = function (arr) {
    for (let ele of arr) {
        this.board[ele[0]][ele[1]] = null;
    }
}



// prints out the string version of the board to the console
BoardState.prototype.printBoard = function() {
    for (let i = 0; i < this.board.length; i++) {
        let str = `${i} `;
        for (let j = 0; j < this.board[0].length; j++) {
            if (!this.board[i][j]) {
                str += " null  ";
            } else if (this.board[i][j] instanceof Object) {
                str += " test  ";
            }
             else {
                str += ` ${this.board[i][j]} `;
            }
        }
        console.log(str);
    }
}



export default BoardState;


// class Test {
//     constructor() {
//         this.test = "test";
//         this.length = 10;
//     }
// }

// Test.prototype.blah = function() {
//     return this.length * 10;
// }


// boardState.prototype.test = function (i, j) {
//     this.board[i][j] = new Test;
// }








// 




// CITE: Copied form https://gist.github.com/GeorgeGkas/36f7a7f9a9641c2115a11d58233ebed2
// Creates a deep copy of a class. Allegedly. 
function clone(instance) {
    return Object.assign(
        Object.create(
            // Set the prototype of the new object to the prototype of the instance.
            // Used to allow new object behave like class instance.
            Object.getPrototypeOf(instance),
        ),
        // Prevent shallow copies of nested structures like arrays, etc
        JSON.parse(JSON.stringify(instance)),
    );
}
// Upon some testing, if I had classes in the board, cloning the board, would 
// not clone the classes present within. 


// let state = new boardState();
// state.test(1, 1);
// state.test(7, 7);
// console.log("before");
// state.printBoard();



// console.log("clone")
// let newState = clone(state);
// newState.test(0, 0);
// newState.test(2, 2);
// newState.printBoard();
// debugger;


// console.log("original");
// state.printBoard();




