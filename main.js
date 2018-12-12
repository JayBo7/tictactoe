var prompt = require('prompt');

var turn = 0;
var matrix = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];

prompt.start();

const input = () => {

	var player = turn % 2 === 0 ? 'X' : 'O';

	prompt.get(['x', 'y'], function (err, result) {
		placeIcon(player, result);
		console.log(`
				 1 2 3		
			1	|${matrix[0][0]}|${matrix[0][1]}|${matrix[0][2]}|
			2	|${matrix[1][0]}|${matrix[1][1]}|${matrix[1][2]}|
			3	|${matrix[2][0]}|${matrix[2][1]}|${matrix[2][2]}|
		`)
		
		turn++;
	})
}

const placeIcon = (player, result) => {
	matrix[result.x - 1][result.y - 1] = player;
}

input();

setInterval(input, 9000);