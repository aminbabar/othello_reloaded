import BoardState from "./boardState";
import View from "./othelloView";
import HumanPlayer from "./Players/humanPlayer";
import RandomPlayer from "./Players/randomPlayer";
import ShortTermMaximimizer from "./Players/shortTermMaximizer";
import MinimaxPlayer from "./Players/MinimaxPlayer";
import AlphaBetaPlayer from "./Players/alphaBetaPlayer";

class Game {
    constructor(figure) {
        this.availablePlayers = ["human", "random", "ShortTermMaximizer", "MinimaxPlayer", "AlphaBetaPlayer"];
        this.board = new BoardState();
        this.player1;
        this.player2;
        this.view = new View(this.board, figure, this);
        // this.view.refreshBoard(this.board.getBoard(), this.board.availableMoves());
        this.displayPlayerOptions();
        // this.play(this.board);
        this.minimaxAlgorithm;
    }

    // Displays the options for the available players
    displayPlayerOptions() {
        this.view.displayPlayerOptions(this.availablePlayers);
    }

    // Starts the game when submit button is clicked on.
    startGame(player1, player2) {
        // debugger;
        if (player1 === "human") {
            this.player1 = new HumanPlayer();
        } else if (player1 === "random") {
            this.player1 = new RandomPlayer();
        } else if (player1 === "ShortTermMaximizer") {
            this.player1 = new ShortTermMaximimizer();
        } else if (player1 === "MinimaxPlayer") {
            this.player1 = new MinimaxPlayer();
        } else if (player1 === "AlphaBetaPlayer") {
            this.player1 = new AlphaBetaPlayer();
        }
        
        if (player2 === "human") {
            this.player2 = new HumanPlayer();
        } else if (player2 === "random") {
            this.player2 = new RandomPlayer();
        } else if (player2 === "ShortTermMaximizer") {
            this.player2 = new ShortTermMaximimizer();
        } else if (player2 === "MinimaxPlayer") {
            this.player2 = new MinimaxPlayer();
        } else if (player2 === "AlphaBetaPlayer") {
            this.player2 = new AlphaBetaPlayer();
        }



        this.view.refreshBoard(this.board.getBoard(), this.board.availableMoves());
        this.play(this.board);
    }


    play() {
        // debugger;
        this.view.removeEventHandler();
        let currentPlayer;
        if (this.board.getCurrentPlayer() === "black") {
            currentPlayer = this.player1;
        } else if ((this.board.getCurrentPlayer() === "white")) {
            currentPlayer = this.player2;
        }

        // this.minimaxAlgorithm = currentPlayer.minimaxAlgorithm.bind(this);
        let makeMove = currentPlayer.makeMove.bind(this, this.board, this.view, currentPlayer);
        if (!this.board.gameOver()) {
            // this.play();
            setTimeout(makeMove, 0);
            
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