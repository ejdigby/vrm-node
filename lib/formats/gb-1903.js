exports.ref = 'gb_1903';
exports.validFrom = 1903;
exports.parse = parse;

const regexOriginal = /^([A-Z]{1,2})(\d{1,4})$/;
const regexReversed = /^(\d{1,4})([A-Z]{1,2})$/;
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
