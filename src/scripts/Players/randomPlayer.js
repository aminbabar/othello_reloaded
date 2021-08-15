


class RandomPlayer {


    makeMove(board) {
        let moves = board.availableMoves();
        board.makeMove(moves[Math.floor(Math.random() * moves.length)]);
    }
}

export default RandomPlayer;