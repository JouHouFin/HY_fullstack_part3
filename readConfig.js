const fs = require('fs')

module.exports = () => {
	var lines = []

	try {
		const data = fs.readFileSync('config.txt', 'UTF-8');
		lines = data.split(/\r?\n/);
	} catch (err) {
		console.error(err);
	}

	return lines[0]
}