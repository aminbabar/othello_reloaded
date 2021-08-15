import BoardState from "./boardState";
import View from "./othelloView";


class Game {
    constructor(figure, player1, player2) {
        this.board = new BoardState();
        this.player1 = player1;
        this.player2 = player2;
        this.view = new View(this.board, figure);
        this.view.refreshBoard(this.board.getBoard(), this.board.availableMoves());
        this.play(this.board);
    }


    play(board) {
        let currentPlayer = this.player1;
        while (!board.gameOver()) {
            currentPlayer.makeMove(this.board);
            if (currentPlayer === this.player1) {
                currentPlayer = this.player2;
            } else {
                currentPlayer = this.player1
            }
            this.view.refreshBoard(board.getBoard(), board.availableMoves());
        }
        console.log("GAME OVER!");
    }
}


export default Game;