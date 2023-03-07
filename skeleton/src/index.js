const View = require ('./ttt-view.js')  // require appropriate file
const Game = require ('../ttt_node/game.js');

document.addEventListener("DOMContentLoaded", () => {
  let game = new Game();
	let viewEle = document.getElementsByClassName("ttt")
	window.ttt
	let view = new View(game, viewEle[0]);
});
