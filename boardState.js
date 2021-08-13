


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
                str += " null  "
            } else {
                str += ` ${this.board[i][j]} `;
            }
        }
        console.log(str);
    }
}


let state = new boardState();
state.printBoard();