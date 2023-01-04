const fs = require('fs');
const pdf = require('pdf-parse');

let stationObject = {};

let fileNames = [
	'./PS-I-Chronicles-2021-IT.pdf',
	'./PS-I-Chronicles-2021_Electronics.pdf',
	'./PS-I-Chronicles-2021-Cement-Infrastructure-Chemical-Mechanical-Steel.pdf',
	'./PS-I-Chronicles-2021-Healthcare.pdf',
	'./PS-I-Chronicles-2021-Finance-Management.pdf',
];

let lastNames = [
	'SHREYA GUDA .(2019A7PS1202H)',
	'GOSAVI ADITYA SANDEEP (2019B1A80963P)',
	'SUCHAY JHA . (2019B1A21052P)',
	'VEDANT DIWAKAR (2019B1A21037P)',
	'SHRUTI GANGWAR (2019B2A10920P)',
];

const start = async function (x) {
	let dataBuffer = fs.readFileSync(fileNames[x]);

	let data = await pdf(dataBuffer);

	// Get all text from the pdf
	const text = data.text;
	// Split each line and make array of lines
	const arr = text.split('\n');

	let stations = []; // Stations array

	let start = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].includes('PS-I station:')) {
			let newStation = arr[i].replace('PS-I station: ', '');
			newStation = newStation.replace(/([.0-9])/g, '').trim();
			stations.push(newStation);
		}
		if (arr[i].includes(lastNames[x])) {
			start = i;
			break;
		}
	}

	for (let i = start; i < arr.length; i++) {
		if (arr[i].includes('PS-I station:')) {
			let newStation = arr[i].replace('PS-I station: ', '');
			newStation = newStation.replace(/([.0-9])/g, '').trim();
			console.log(newStation);
			let stationArray = [];

			for (let j = i + 1; j < arr.length; j++) {
				if (arr[j] === 'Student ') {
					for (let l = j + 1; l < arr.length; l++) {
						if (arr[l].includes('Name:')) {
							let newName = arr[l].replace('Name: ', '');
							// console.log(newName.split(' (')[0]);
							// console.log(
							// 	newName.split(' (')[1].replace(')', '')
							// );
							let writeUp = [];

							for (let k = l + 1; k < arr.length; k++) {
								// console.log(arr[k]);
								if (
									!arr[k].includes('PS-I station:') &&
									!arr[k].includes('Name:')
								) {
									writeUp.push(arr[k]);
								} else {
									break;
								}
							}
							// console.log(newName);
							// console.log(writeUp.join('\n'));
							try {
								stationArray.push({
									name: newName.split('(')[0].trim(),
									id: newName
										.split('(')[1]
										.replace(')', '')
										.trim(),
									writeUp: writeUp.join('\n').trim(),
								});
							} catch (e) {
								console.log(e);
								console.log(newName);
								stationArray.push({
									name: newName,
									id: '-',
									writeUp: writeUp.join('\n'),
								});
							}
						} else if (arr[l].includes('PS-I station:')) {
							break;
						}
					}
					break;
				} else if (arr[j].includes('PS-I station:')) {
					break;
				}
			}
			stations.forEach((station) => {
				if (station.includes(newStation)) {
					stationObject[station.replace(' ,', ',')] = stationArray;
				}
			});
		}
	}
};

(async () => {
	for (let x = 0; x < 5; x++) {
		await start(x);
	}

	const scraped = JSON.stringify(stationObject, null, 4);

	// write JSON string to a file
	fs.writeFile('chronicles_ps1_2021.json', scraped, (err) => {
		if (err) {
			throw err;
		}
		console.log('JSON data is saved.');
	});
})();
