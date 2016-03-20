exports.ref = 'gb_2001';
exports.validFrom = 2001;
exports.parse = parse;

const regex = /^([A-Z]{2}\d{2})([A-Z]{3})$/;
const prohibitedAreaLetters = ['I', 'Q', 'Z'];

function parse(vrm) {
	const match = vrm.match(regex);

	if (!match)
		return null;

	if (prohibitedAreaLetters.indexOf(vrm.substr(0, 1)) !== -1
		|| prohibitedAreaLetters.indexOf(vrm.substr(1, 1)) !== -1)
		return null;

	return {
		prettyVrm: match.slice(1).join(' '),
	};
}
