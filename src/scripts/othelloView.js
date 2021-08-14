


class View {
    constructor(game, el) {
        this.game = game;
        this.el = el;
        // debugger;
        let ul = this.setupBoard();
        this.el.appendChild(ul);
    }

    setupBoard() {
        const ul = document.createElement("ul");
        // debugger;
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                let li = document.createElement("li");
                li.dataset.r = r;
                ul.appendChild(li);
            }
        }
        return ul;
    }
}

export default View;