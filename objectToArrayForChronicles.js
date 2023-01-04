const data = require('./chronicles_combined_ps1.json');

// console.log(data.length);

const array = [];

for (const property in data) {
	array.push({
		name: property,
		...data[property],
	});
}

const fs = require('fs');

const scraped = JSON.stringify(array, null, 4);

fs.writeFile('chronicles_combined_ps1_array.json', scraped, (err) => {
	if (err) {
		throw err;
	}
	console.log('JSON data is saved.');
});
