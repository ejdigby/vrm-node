exports.ref = 'gb_1983';
exports.validFrom = 1983;
exports.parse = parse;

const regex = /^([A-Z]\d{1,3})([A-Z]{3})$/;
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
