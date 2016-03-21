exports.ref = 'gb_2001';
exports.validFrom = 2001;
exports.parse = parse;

const regex = /^([A-Z]{2}\d{2})([A-Z]{3})$/;
const prohibitedLettersArea = ['I', 'Q', 'Z'];
const prohibitedLettersSerial = ['I', 'Q'];

function parse(vrm) {
	const match = vrm.match(regex);

	if (!match)
		return null;

	const area = match[1].substr(0, 2);
	const ageId = match[1].substr(2, 2);
	const serial = match[2];

	const year = calcYear(ageId);

	for (var i = 0; i < area.length; i++) {
		if (prohibitedLettersArea.indexOf(area[i]) !== -1)
			return null;
	}

	if (prohibitedLettersSerial.indexOf(serial) !== -1)
		return null;

	return {
		prettyVrm: match.slice(1).join(' '),

		_extra: {
			area: area,
			ageIdentifier: ageId,
			serialLetter: serial,
			year: year,
		},
	};
}

function calcYear(ageId) {
	const age = parseInt(ageId, 10);

	if (age === 0)
		return 2050;

	if (age > 50)
		return age - 50 + 2000;

	return age + 2000;
}
