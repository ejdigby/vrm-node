exports.ref = 'ni_1903';
exports.validFrom = 1903;
exports.parse = parse;

// area codes currently restricted to being 2 letters
// haven't found any 1 letter areas, but who knows...

const regexOriginal = /^([A-Z]{2})(\d{1,4})$/;
const regexReversed = /^(\d{1,4})([A-Z]{2})$/;

function parse(vrm) {
	const original = vrm.match(regexOriginal);
	const reversed = vrm.match(regexReversed);
	const match = original || reversed;

	if (!match)
		return null;

	const isOriginal = !!original;
	const area = isOriginal ? original[1] : reversed[2];
	const seq = parseInt(isOriginal ? original[2] : reversed[1], 10);

	if (areas.indexOf(area) === -1)
		return null;

	return {
		prettyVrm: match.slice(1).join(' '),

		_extra: {
			reversed: !isOriginal,
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
