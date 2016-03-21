exports.ref = 'gb_1963';
exports.validFrom = 1963;
exports.parse = parse;

const regex = /^([A-Z]{3})(\d{1,3}[A-Z])$/;
const prohibitedLetters = ['I', 'Q', 'Z'];

function parse(vrm) {
	const match = vrm.match(regex);

	if (!match)
		return null;

	const serial = match[1].substr(0, 1);
	const area = match[1].substr(1, 2);
	const seq = parseInt(match[2].slice(0, -1), 10);
	const ageId = match[2].slice(-1);

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
			serialLetter: serial,
			area: area,
			sequence: seq,
			ageIdentifier: ageId,
			year: year,
		},
	};
}

const ageIdToYear = {
	'A': 1963,
	'B': 1964,
	'C': 1965,
	'D': 1966,
	'E': 1967,
	'F': 1968,
	'G': 1969,
	'H': 1970,
	'J': 1971,
	'K': 1972,
	'L': 1973,
	'M': 1974,
	'N': 1975,
	'P': 1976,
	'R': 1977,
	'S': 1978,
	'T': 1979,
	'V': 1980,
	'W': 1981,
	'X': 1982,
	'Y': 1983,
};
