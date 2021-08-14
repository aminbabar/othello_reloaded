

class View {
    constructor(game, el) {
        this.game = game;
        this.el = el;
        let ul = this.setupBoard();
        this.el.appendChild(ul);
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
                div.classList.add("white");
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