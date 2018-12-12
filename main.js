var prompt = require('prompt');

prompt.start();

prompt.get(['x', 'y'], function (err, result) {
	console.log(result.x, result.y)
	console.log(`
			 1 2 3		
		1	| | | |
		2	| | | |
		3	| | | |
	`)
})