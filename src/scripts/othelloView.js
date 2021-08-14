
// this.ul.children[2].children[0].classList.add("black")

class View {
    constructor(game, el) {
        this.game = game;
        this.el = el;
        this.ul = this.setupBoard();
        this.el.appendChild(this.ul);
        this.handleClick = this.handleClick.bind(this);
        this.el.addEventListener("click", this.handleClick)
    }

    handleClick (e) {
        console.log(e.target);
    }

    refreshBoard(board, availableMoves) {
        let ulChildren = this.ul.children;
        // debugger;
        let pieceClasses = ["white", "black", "moves"];
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                // index for the ulChildren array. Index converted to 1D. 
                let index = (r * 8) + c
                let currLi = ulChildren[index];
                currLi.children[0].classList.remove(...pieceClasses);
                if (board[r][c] === "white") {
                    currLi.children[0].classList.add("white");
                } else if (board[r][c] === "black") {
                    currLi.children[0].classList.add("black");
                }
            }
        }
        for (let move of availableMoves) {
            let index = (move[0] * 8) + move[1]
            let currLi = ulChildren[index];
            currLi.children[0].classList.remove(...pieceClasses);
            currLi.children[0].classList.add("moves");
        }
    }

    setupBoard() {
        const ul = document.createElement("ul");
        ul.classList.add("board-ul")
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                // each li would represent one square
                let li = document.createElement("li");

                // the piece element
                let div = document.createElement("div");
                li.dataset.r = r;
                li.dataset.c = c;
                li.appendChild(div);
                ul.appendChild(li);
            }
        }
        return ul;
    }
}

export default View;