

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



class MinimaxPlayer {
    constructor() {
        this.type = "MinimaxPlayer";
        this.minimaxAlgorithm = this.minimaxAlgorithm.bind(this);
    }


    makeMove(board, view, playerCTX) {
        let depth = 3;
        let currentPlayer = board.getCurrentPlayer();
        let availableMoves = board.availableMoves();

        // CONVERT TO ONE LINER
        let maximizingPlayer;
        if (currentPlayer === "black") {
            maximizingPlayer = true;
        } else {
            maximizingPlayer = false;
        }
        
        // let minimaxAlgorithm =  playerCTX.minimaxAlgorithm.bind(playerCTX);
        // let boardStateClone = clone(board);
        
        let evalList = [];
        for (let move of availableMoves) {
            // debugger;
            evalList.push(playerCTX.minimaxAlgorithm(board, move, 0, depth, maximizingPlayer, playerCTX));
        }

        // CONVERT TO ONE LINER
        let index;
        if (currentPlayer === "black") {
            index = evalList.indexOf(Math.max(...evalList));
        } else {
            index = evalList.indexOf(Math.min(...evalList));
        }
        // console.log(availableMoves.indexOf([index]));
        // debugger;
        board.makeMove(availableMoves[index]);
        view.refreshBoard(board.getBoard(), board.availableMoves());
        this.play();
    }

    heuristicone(boardState) {
        return boardState.count("black") - boardState.count("white");
    }

    //  Basic heuristic that maximizes for black and minimizes for white
    heuristic(boardState) {
        let pieces = boardState.count("black") - boardState.count("white");
        let totalUtility = 0;
        totalUtility += boardState.availableMoves().length;

        if (boardState.currentPlayer === "white") {
            totalUtility *= -1;
        }
        return totalUtility + (pieces / 5);
    }

    // depth first and depth limited search
    minimaxAlgorithm(boardState, move, currDepth, depth, maximizingPlayer, playerCTX) {
        // if the desired depth has been reached, we will return the evaluation
        // for that depth

        // CHECK IF THE NEXT TWO LINES ARE NEEDED    !!!!
        let boardStateClone = clone(boardState);
        // debugger;
        boardStateClone.makeMove(move);
        let availableMoves = boardState.availableMoves();

        if (currDepth === depth || availableMoves.length === 0) {
            return playerCTX.heuristic(boardStateClone);
        }

        // IMPLEMENT LOGIC FOR WHEN MOVES ARE SKIPPED   !!!!
        // let currentPLayer = boardState.currentPLayer();

        // let boardStateClone = clone(boardState);
        // boardStateClone.makeMove(move);  //WHEN SHOULD I MAKE THIS MOVE

        // for the maximizing player, we find the move with the greatest utility for the
        // maximizing player. Viceversa for minimizing player. 
        if (maximizingPlayer) {
            let maxEval = -Infinity;
            // let availableMoves = boardState.availableMoves();
            for (let newMove of availableMoves) {
                let currEval = playerCTX.minimaxAlgorithm(boardStateClone, newMove, currDepth + 1, depth, !maximizingPlayer, playerCTX);
                if (currEval > maxEval) {
                    maxEval = currEval;
                }
            }
            return maxEval;
        } else {
            let minEval = Infinity;
            // let availableMoves = boardStateClone.availableMoves();
            for (let newMove of availableMoves) {
                let currEval = playerCTX.minimaxAlgorithm(boardStateClone, newMove, currDepth + 1, depth, !maximizingPlayer, playerCTX);
                if (currEval < minEval) {
                    minEval = currEval;
                }
            }
            return minEval;
        }


    }
}

export default MinimaxPlayer;