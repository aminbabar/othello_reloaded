


class RandomPlayer {
    constructor() {
        this.type = "random";
    }

    makeMove(board, view) {
        // debugger;
        let moves = board.availableMoves();
        board.makeMove(moves[Math.floor(Math.random() * moves.length)]);
        view.refreshBoard(board.getBoard(), board.availableMoves());
        // console.log("hi");
        // debugger;
        // if (!board.gameOver()) {
        this.play();
        // }

    }
}

export default RandomPlayer;