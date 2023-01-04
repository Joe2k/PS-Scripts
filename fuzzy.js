fuzz = require('fuzzball');

const data = require('./chronicles_combined_ps1.json');

const newData = [];

for (const property in data) {
	newData.push(
		property
			.toLowerCase()
			.replace('limited', 'ltd')
			.replace('private', 'pvt')
	);
}

for (let i = 0; i < newData.length; i++) {
	for (let j = i + 1; j < newData.length; j++) {
		if (
			fuzz.partial_ratio(
				newData[i].toLowerCase(),
				newData[j].toLowerCase()
			) >= 90
		) {
			console.log(newData[i], ' , ', newData[j]);
		}
	}
}

// const newData = {};

// for (const property in data) {
// 	if (
// 		data[property]['2021'].length === 0 &&
// 		data[property]['2019'].length === 0 &&
// 		data[property]['2020'].length === 0
// 	) {
// 	} else {
// 		newData[property] = data[property];
// 	}
// }
// const scraped = JSON.stringify(newData, null, 4);
// const fs = require('fs');
// // write JSON string to a file
// fs.writeFile('chronicles_combined_sem2_new.json', scraped, (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('JSON data is saved.');
// });

// let k = 0;
// for (const property in newData) {
// 	k++;
// }
// console.log(k);
