


class boardState {
    constructor() {
        this.board = boardState.createBoard();
        // black is the first player in othello
        this.currentPlayer = "black";
    }

    // A static method that would return a board that is set up!
    static createBoard() {
        let boardWidth = 8;
        let boardLength = 8;
        let board = [];
        for (let i = 0; i < boardLength; i++) {
            let row = [];
            for (let j = 0; j < boardWidth; j++) {
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

}




// prints out the string version of the board to the console
boardState.prototype.printBoard = function() {
    debugger;
    for (let i = 0; i < this.board.length; i++) {
        let str = "";
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


class Test {
    constructor () {
        this.test = "test";
    }
}

boardState.prototype.test = function(i, j) {
    this.board[i][j] = new Test;
}




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



let state = new boardState();
state.test(1, 1);
state.test(7, 7);
console.log("before");
state.printBoard();



console.log("clone")
let newState = clone(state);
newState.test(0, 0);
newState.test(2, 2);
newState.printBoard();


console.log("original");
state.printBoard();




