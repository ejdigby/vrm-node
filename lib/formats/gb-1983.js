exports.ref = 'gb_1983';
exports.validFrom = 1983;
exports.parse = parse;

const regex = /^([A-Z]\d{1,3})([A-Z]{3})$/;
const prohibitedLetters = ['I', 'Q', 'Z'];

function parse(vrm) {
	const match = vrm.match(regex);

	if (!match)
		return null;

	const ageId = match[1].substr(0, 1);
	const seq = parseInt(match[1].substr(1), 10);
	const serial = match[2].substr(0, 1);
	const area = match[2].substr(1, 2);

	const year = ageIdToYear[ageId];

	if (prohibitedLetters.indexOf(serial) !== -1)
		return null;

	for (var i = 0; i < area.length; i++) {
		if (prohibitedLetters.indexOf(area[i]) !== -1)
			return null;
	}

	if (!year)
		return null;

	return {
		prettyVrm: match.slice(1).join(' '),

		_extra: {
			ageIdentifier: ageId,
			sequence: seq,
			serialLetter: serial,
			area: area,
			year: year,
		},
	};
}

const ageIdToYear = {
	'A': 1984,
	'B': 1985,
	'C': 1986,
	'D': 1987,
	'E': 1988,
	'F': 1989,
	'G': 1990,
	'H': 1991,
	'J': 1992,
	'K': 1993,
	'L': 1994,
	'M': 1995,
	'N': 1996,
	'P': 1997,
	'R': 1998,
	'S': 1999,
	'T': 1999,
	'V': 2000,
	'W': 2000,
	'X': 2001,
	'Y': 2001,
};
