const data2019 = require('./chronicles_ps1_2019_new.json');
const data2020 = require('./chronicles_ps1_2020_new.json');
const data2021 = require('./chronicles_ps1_2021_new.json');
// const oldData = require('./data.json');

const data = {};

for (const property in data2019) {
	if (!data[property]) data[property] = { 2019: {}, 2020: {}, 2021: {} };
	data[property]['2019'] = data2019[property];
}
for (const property in data2020) {
	if (!data[property]) data[property] = { 2019: {}, 2020: {}, 2021: {} };
	data[property]['2020'] = data2020[property];
}
for (const property in data2021) {
	if (!data[property]) data[property] = { 2019: {}, 2020: {}, 2021: {} };
	data[property]['2021'] = data2021[property];
}

Object.size = function (obj) {
	var size = 0,
		key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};

console.log(Object.size(data));
// console.log(Object.size(oldData));

const scraped = JSON.stringify(data, null, 4);

const fs = require('fs');
// write JSON string to a file
fs.writeFile('chronicles_combined_ps1.json', scraped, (err) => {
	if (err) {
		throw err;
	}
	console.log('JSON data is saved.');
});
