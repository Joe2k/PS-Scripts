const data = require('./ps2-sem-2-names-raw.json');

let finalData = [];

for (let i = 0; i < data.length; i++) {
	let newObj = data[i];
	newObj['name'] = newObj['Station Name'] + ' @ ' + newObj['City'];
	finalData.push(newObj);
}

const scraped = JSON.stringify(finalData, null, 4);

const fs = require('fs');
// write JSON string to a file
fs.writeFile('Final_Names_PS2_Sem2_2022.json', scraped, (err) => {
	if (err) {
		throw err;
	}
	console.log('JSON data is saved.');
});
