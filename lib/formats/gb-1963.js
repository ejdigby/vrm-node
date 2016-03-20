exports.ref = 'gb_1963';
exports.validFrom = 1963;
exports.parse = parse;

const regex = /^([A-Z]{3})(\d{1,3}[A-Z])$/;
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
