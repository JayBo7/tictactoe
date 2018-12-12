var prompt = require('prompt');

var turn = 0;
var matrix = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];

prompt.start();

const input = () => {

	prompt.get(['x', 'y'], function (err, result) {
		placeIcon('X', result);
		console.log(`
				 1 2 3		
			1	|${matrix[0][0]}|${matrix[0][1]}|${matrix[0][2]}|
			2	|${matrix[1][0]}|${matrix[1][1]}|${matrix[1][2]}|
			3	|${matrix[2][0]}|${matrix[2][1]}|${matrix[2][2]}|
		`)
	})
}

const placeIcon = (player, result) => {
	matrix[result.x - 1][result.y - 1] = player;
}

input();

setInterval(input, 30000);