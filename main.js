var prompt = require('prompt');

var turn = 0;
var matrix = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];

var promptSchema = {
	properties: {
		x: {
			pattern: /^[1-3]{1}$/,
			message: 'Pick a value from 1 - 3',
			required: true
		},
		y: {
			pattern: /^[1-3]{1}$/,
			message: 'Pick a value from 1 - 3',
			required: true
		}
	}
}

prompt.start();

const input = () => {

	var player = turn % 2 === 0 ? 'X' : 'O';

	console.log(`The current player is ${player}`);

	prompt.get(promptSchema, function (err, result) {
		placeIcon(player, result);
		console.log(`
			   1 2 3		
			1 |${matrix[0][0]}|${matrix[0][1]}|${matrix[0][2]}|
			2 |${matrix[1][0]}|${matrix[1][1]}|${matrix[1][2]}|
			3 |${matrix[2][0]}|${matrix[2][1]}|${matrix[2][2]}|
		`)

		var winner = determineWinner(player);

		if (winner) {
			console.log(`${winner} wins`);
			return;
		}

		if (turn > 8) {
			return;
		}

		input();
	})
}

const placeIcon = (player, result) => {
	if (matrix[result.x - 1][result.y - 1] !== ' ') {
		return;
	} else {
		matrix[result.x - 1][result.y - 1] = player;
		turn++;
	}
}

const determineWinner = (player) => {
	const winConditions = [[[1,1],[1,2],[1,3]], [[2,1],[2,2],[2,3]], [[3,1],[3,2],[3,3]], [[1,1],[2,1],[3,1]], [[1,2],[2,2],[3,2]], [[1,3],[2,3],[3,3]], [[1,1],[2,2],[3,3]], [[3,1],[2,2],[3,1]]]

	for (var i = 0; i < winConditions.length; i++) {
		var stringKey = '';
		for (var j = 0; j < winConditions[i].length; j++) {
			stringKey += matrix[winConditions[i][j][0] - 1][winConditions[i][j][1] - 1];
			if (stringKey === player + player + player) {
				return player;
			}
		}
	}
}

console.log(`
			   1 2 3		
			1 |${matrix[0][0]}|${matrix[0][1]}|${matrix[0][2]}|
			2 |${matrix[1][0]}|${matrix[1][1]}|${matrix[1][2]}|
			3 |${matrix[2][0]}|${matrix[2][1]}|${matrix[2][2]}|
		`)

input();
