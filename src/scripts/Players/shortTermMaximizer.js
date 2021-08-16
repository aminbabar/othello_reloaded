
// CITE: Copied form https://gist.github.com/GeorgeGkas/36f7a7f9a9641c2115a11d58233ebed2
// Creates a deep copy of a class.
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


// This player makes a move based on the current available moves which results
// in the highest score for the current player in the short term for the
// next turn
class ShortTermMaximimizer {

    constructor() {
        this.type = "ShortTermMaximizer";

    }

    makeMove(board, view) {
        let currentPlayer = board.getCurrentPlayer();
        let currentScore = board.count(currentPlayer);
        let availableMoves = board.availableMoves();
        let scoreChange = [];
        for (let move of availableMoves) {
            let newBoardState = clone(board);
            newBoardState.makeMove(move);
            scoreChange.push(newBoardState.count(currentPlayer) - currentScore);
        }

        let maxIndex = scoreChange.indexOf(Math.max(...scoreChange));
        board.makeMove(availableMoves[maxIndex]);

        // refresh the board view after move
        view.refreshBoard(board.getBoard(), board.availableMoves());
        // Call on play in the game class so that the other player can make a move
        // Context of makeMove function bound to game. 
        this.play();
    }   

}


export default ShortTermMaximimizer;