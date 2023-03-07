class View {
  constructor(game, el) {
		this.game = game; 
		this.el = el; 

		this.setupBoard(); 
		this.bindEvents();
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
			console.log("bindEvents")
		} )
	}

  handleClick(e) {
		console.log("Click") 
			let spot = e.target;
			this.makeMove(spot);
	}

  makeMove(square) {
		let pos = JSON.parse(square.dataset.pos);
		if (!this.game.board.isEmptyPos(pos)) {
			alert("That square is not empty!")
		} else {
			this.game.playMove(pos)
			square.innerText = this.game.currentPlayer
		}

		this.game.isOver() && this.handleGameOver()
	}
}

module.exports = View;
