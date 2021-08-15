import BoardState from "./boardState";
import View from "./othelloView";



class Game {
    constructor(figure, player1, player2) {
        this.board = new BoardState();
        this.player1 = player1;
        this.player2 = player2;
        this.view = new View(this.board, figure, this);
        this.view.refreshBoard(this.board.getBoard(), this.board.availableMoves());
        this.play(this.board);
    }


    play() {
        this.view.removeEventHandler();
        let currentPlayer;
        if (this.board.getCurrentPlayer() === "black") {
            currentPlayer = this.player1;
        } else if ((this.board.getCurrentPlayer() === "white")) {
            currentPlayer = this.player2;
        }
        let makeMove = currentPlayer.makeMove.bind(this, this.board, this.view);
        if (!this.board.gameOver()) {
            // this.play();
            setTimeout(makeMove, 1000);
        }
    }

    // playCB() {
    //     console.log("hi");
    //     // debugger;
    //     let playCB = this.playCB.bind(this)
    //     setTimeout(playCB, 1000);
    //     // console.log(a);

    // }


    // playone(board) {
    //     let currentPlayer = this.player1;

    //     while (!board.gameOver()) {
    //         currentPlayer.makeMove(this.board, this.view);
    //         if (currentPlayer === this.player1) {
    //             currentPlayer = this.player2;
    //         } else {
    //             currentPlayer = this.player1
    //         }
    //         this.view.refreshBoard(board.getBoard(), board.availableMoves());
    //     }
    //     console.log("GAME OVER!");
    // }
}


export default Game;