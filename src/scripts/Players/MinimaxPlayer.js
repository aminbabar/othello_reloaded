

// CITE: Copied form https://gist.github.com/GeorgeGkas/36f7a7f9a9641c2115a11d58233ebed2

import BoardState from "../boardState";

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



class MinimaxPlayer {
    constructor() {
        this.type = "MinimaxPlayer";
    }


    makeMove(board, view) {
        let currentPlayer = board.getCurrentPlayer();
        let availableMoves = board.availableMoves();
        
    }

    //  Basic heuristic that maximizes for black and minimizes for white
    heuristic(boardState) {
        return boardState.count("black") - boardState.count("white");
    }

    // depth first and depth limited search
    minimaxAlgorithm(boardState, move, currDepth, depth, maximizingPlayer) {
        // if the desired depth has been reached, we will return the evaluation
        // for that depth
        if (currDepth === depth) {
            // CHECK IF THE NEXT TWO LINES ARE NEEDED
            let boardStateClone = clone(boardState);
            boardStateClone.makeMove(move);
            return this.heuristic(boardState);
        }

        // IMPLEMENT LOGIC FOR WHEN MOVES ARE SKIPPED
        // let currentPLayer = boardState.currentPLayer();

        let boardStateClone = clone(boardState);
        boardStateClone.makeMove(move);  //WHEN SHOULD I MAKE THIS MOVE

        // for the maximizing player, we find the move with the greatest 
        if (maximizingPlayer) {
            let maxEval = -Infinity;
            let availableMoves = boardState.availableMoves();
            for (let newMove in availableMoves) {

                eval = this.minimaxAlgorithm(boardStateClone, newMove, currDepth + 1, depth, !maximizingPlayer);
                if (eval > maxEval) {
                    maxEval = eval;
                }
            }
            return maxEval;
        } else {
            let minEval = Infinity;
            let availableMoves = boardStateClone.availableMoves();
            for (let newMove in availableMoves) {
                let eval = this.minimaxAlgorithm(boardStateClone, newMove, currDepth + 1, depth, !maximizingPlayer);
                if (eval < minEval) {
                    minEval = eval;
                }
            }
            return minEval;
        }


    }
}