exports.ref = 'gb_1932';
exports.validFrom = 1932;
exports.parse = parse;

const regexOriginal = /^([A-Z]{3})(\d{1,3})$/;
const regexReversed = /^(\d{1,3})([A-Z]{3})$/;
const prohibitedLetters = ['I', 'Q', 'Z'];

function parse(vrm) {
	const original = vrm.match(regexOriginal);
	const reversed = vrm.match(regexReversed);
	const match = original || reversed;

	if (!match)
		return null;

	const isOriginal = !!original;
	const serial = (isOriginal ? original[1] : reversed[2]).substr(0, 1);
	const area = (isOriginal ? original[1] : reversed[2]).substr(1, 2);
	const seq = parseInt(isOriginal ? original[2] : reversed[1], 10);

	if (prohibitedLetters.indexOf(serial) !== -1)
		return null;

	for (var i = 0; i < area.length; i++) {
		if (prohibitedLetters.indexOf(area[i]) !== -1)
			return null;
	}

	return {
		prettyVrm: match.slice(1).join(' '),

		_extra: {
			reversed: !isOriginal,
			serialLetter: serial,
			area: area,
			sequence: seq,
		},
	};
}
