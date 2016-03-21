exports.ref = 'ni_1966';
exports.validFrom = 1966;
exports.parse = parse;

// this format is likely to become reversible

const regex = /^([A-Z]{3})(\d{1,4})$/;

function parse(vrm) {
	const match = vrm.match(regex);

	if (!match)
		return null;

	const serial = match[1].substr(0, 1);
	const area = match[1].substr(1, 2);
	const seq = parseInt(match[2], 10);

	if (areas.indexOf(area) === -1)
		return null;

	return {
		prettyVrm: match.slice(1).join(' '),

		_extra: {
			serialLetter: serial,
			area: area,
			sequence: seq,
		},
	};
}

const areas = [
	'AZ', 'BZ', 'CZ', 'DZ', 'EZ', 'FZ', 'GZ', 'HZ', 'IA', 'IB', 'IG', 'IJ', 'IL',
	'IW', 'JI', 'JZ', 'KZ', 'LZ', 'MZ', 'NZ', 'OI', 'OZ', 'PZ', 'RZ', 'SZ', 'TZ',
	'UI', 'UZ', 'VZ', 'WZ', 'XI', 'XZ', 'YZ',
];
