// import { stat } from "fs";
import BoardState from "./scripts/boardState";
import View from "./scripts/othelloView";

document.addEventListener("DOMContentLoaded", () => {

    const figure = document.querySelector('.board');
    let state = new BoardState();
    let view = new View(state, figure);
    view.refreshBoard(state.getBoard(), state.availableMoves());

// state.test(1, 1);
// state.test(7, 7);
// console.log("before");
    // // debugger;   
    // // state.printBoard();
    // console.log(state.availableMoves());
    // // state.printBoard();
    // // state.
    // let moves = state.availableMoves();
    // state.testMove(moves);
    // state.printBoard();
    // // console.log(state.movesInDir(3, 0, 2, 1));
    // state.makeMove([3,2]);
    // state.printBoard();
    // state.reverseTestMove(moves)
    // console.log("hi");
    // moves = state.availableMoves();
    // state.testMove(moves);
    // state.reverseTestMove(moves)
    // state.makeMove([3, 4]);


    // moves = state.availableMoves();

    // state.testMove(moves);
    // state.printBoard();



// console.log("clone")
// let newState = clone(state);
// newState.test(0, 0);
// newState.test(2, 2);
// newState.printBoard();
// debugger;


// console.log("original");
// state.printBoard();
});

