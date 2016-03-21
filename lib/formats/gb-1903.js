exports.ref = 'gb_1903';
exports.validFrom = 1903;
exports.parse = parse;

const regexOriginal = /^([A-Z]{1,2})(\d{1,4})$/;
const regexReversed = /^(\d{1,4})([A-Z]{1,2})$/;
const prohibitedLetters = ['I', 'Q', 'Z'];

function parse(vrm) {
	const original = vrm.match(regexOriginal);
	const reversed = vrm.match(regexReversed);
	const match = original || reversed;

	if (!match)
		return null;

	const isOriginal = !!original;
	const area = isOriginal ? original[1] : reversed[2];
	const seq = parseInt(isOriginal ? original[2] : reversed[1], 10);

	for (var i = 0; i < area.length; i++) {
		if (prohibitedLetters.indexOf(area[i]) !== -1)
			return null;
	}

	return {
		prettyVrm: match.slice(1).join(' '),

		_extra: {
			reversed: !isOriginal,
			area: area,
			sequence: seq,
		},
	};
}
