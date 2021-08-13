// import { stat } from "fs";
import BoardState from "./scripts/boardState"


document.addEventListener("DOMContentLoaded", () => {
    let state = new BoardState();
// state.test(1, 1);
// state.test(7, 7);
// console.log("before");
    // debugger;   
    // state.printBoard();
    // console.log(state.availableMoves());
    state.testMove(state.availableMoves());
    state.printBoard();



// console.log("clone")
// let newState = clone(state);
// newState.test(0, 0);
// newState.test(2, 2);
// newState.printBoard();
// debugger;


// console.log("original");
// state.printBoard();
});

