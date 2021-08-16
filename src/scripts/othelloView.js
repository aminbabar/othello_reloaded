
// this.ul.children[2].children[0].classList.add("black")


// CHANGE GAME. ITS BOARD. 
class View {
    constructor(game, el, gameCtx) {
        this.gameCtx = gameCtx;
        this.game = game;
        this.el = el;
        this.currentPlayer = document.createElement("h2");
        this.currentPlayer.classList.add("current-player");
        this.currentPlayer.innerText = "current player: black"
        el.appendChild(this.currentPlayer);
        this.ul = this.setupBoard();
        this.el.appendChild(this.ul);
        this.handleClick = this.handleClick.bind(this);
        this.el.addEventListener("click", this.handleClick)
        this.refreshBoard = this.refreshBoard.bind(this);
        this.removeEventHandler = this.removeEventHandler.bind(this);
        this.addEventHandler = this.addEventHandler.bind(this);



        // Handing event listenecer to start game button
        this.submitForm = document.querySelector("#start-game");
        this.startGameSubmit = this.startGameSubmit.bind(this);
        this.submitForm.addEventListener("submit", this.startGameSubmit);
    }

    startGameSubmit(e) {
        e.preventDefault();
        this.gameCtx.startGame(e.target.player1.value, e.target.player2.value);
    }


    handleClick (e) {
        let data = e.target.dataset;
        let pos = [parseInt(data.r), parseInt(data.c)];
        // debugger;
        console.log(this.game.availableMoves());
        for (let ele of this.game.availableMoves()) {
            // debugger;
            
            if (ele[0] === pos[0] && ele[1] === pos[1]) {
                this.game.makeMove(pos);
                // debugger;
                this.refreshBoard(this.game.board, this.game.availableMoves());
                this.gameCtx.play();
            }
        }
        // debugger;
    }

    refreshBoard(board, availableMoves) {
        // debugger;
        let ulChildren = this.ul.children;
        // debugger;
        let pieceClasses = ["white", "black", "moves"];
        this.currentPlayer.innerText = `current player: ${this.game.getCurrentPlayer()}`


        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                // index for the ulChildren array. Index converted to 1D. 
                let index = (r * 8) + c
                let currLi = ulChildren[index];
                // currLi.children[0].innerHTML = `r:${r}, c:${c}`
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
            // console.log(index, move[0], move[1]);
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

    removeEventHandler() {
        // debugger;
        console.log("event handler removed")
        this.el.removeEventListener("click", this.handleClick);
    }

    addEventHandler() {
        console.log("event handler added")
        this.el.addEventListener("click", this.handleClick)
    }

    displayPlayerOptions(availablePlayers) {
        player1 = document.querySelector("#player1");
        player2 = document.querySelector("#player2");
        for (let player of availablePlayers) {
            // debugger;
            let option1 = document.createElement("option");
            let option2 = document.createElement("option");
            option1.innerText = player;
            option1.setAttribute("value", player);
            option2.innerText = player;
            option2.setAttribute("value", player);
            player1.appendChild(option1);
            player2.appendChild(option2);
        }

        // debugger;
    }
}

export default View;