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

	if (!acceptableArea(area))
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

function acceptableArea(area) {
	for (var i = 0; i < area.length; i++) {
		if (area[i] === 'I' || area[i] === 'Z')
			return true;
	}

	return false;
}
