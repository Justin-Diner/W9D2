class View {
  constructor(game, el) {
		this.game = game; 
		this.el = el; 

		this.setupBoard(); 
	}

  setupBoard() {
		const boardView = document.createElement("ul");
		for (let i = 0; i < 3; i++)
				for (let j = 0; j < 3; j++) {
						const square = document.createElement("li");
						square.dataset.pos = JSON.stringify([i, j]),
						boardView.append(square)
				}
		this.el.append(boardView);
	}
  
  bindEvents() {
		this.el.addEventListener("click", e => {
			this.handleClick(e);
		} )
	}

  handleClick(e) {
			let row = e.target.dataset.row;
			let col = e.target.dataset.col; 
			let spot = [row, col];
			this.makeMove(spot);
	}

  makeMove(square) {
		if (!this.game.board.isEmptyPos(square)) {
			alert("That square is not empty!")
		} else {
			this.game.playMove(square)

		}

		this.game.isOver() && this.handleGameOver()
	}
}

module.exports = View;
