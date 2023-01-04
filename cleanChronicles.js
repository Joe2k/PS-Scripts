const fs = require('fs');
const data = require('./chronicles_ps1_2021.json');

const newData = {};

for (const property in data) {
	const newString = property.replace(/\s+/g, ' ').trim();
	for (let i = 0; i < data[property].length; i++) {
		data[property][i]['id'] = data[property][i]['id'].trim();
		data[property][i]['name'] = data[property][i]['name'].trim();
	}
	newData[newString] = data[property];
}

const scraped = JSON.stringify(newData, null, 4);

// write JSON string to a file
fs.writeFile('chronicles_ps1_2021_new.json', scraped, (err) => {
	if (err) {
		throw err;
	}
	console.log('JSON data is saved.');
});
