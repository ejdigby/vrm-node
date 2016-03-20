exports.ref = 'gb_1932';
exports.validFrom = 1932;
exports.parse = parse;

const regexOriginal = /^([A-Z]{3})(\d{1,3})$/;
const regexReversed = /^(\d{1,3})([A-Z]{3})$/;
const prohibitedAreaLetters = ['I', 'Q', 'Z'];

function parse(vrm) {
	const match = vrm.match(regexOriginal) || vrm.match(regexReversed);

	if (!match)
		return null;

	if (prohibitedAreaLetters.indexOf(vrm.substr(0, 1)) !== -1
		|| prohibitedAreaLetters.indexOf(vrm.substr(1, 1)) !== -1)
		return null;

	return {
		prettyVrm: match.slice(1).join(' '),
	};
}
