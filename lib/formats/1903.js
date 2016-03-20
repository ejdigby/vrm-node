exports.ref = '1903';
exports.validFrom = 1903;
exports.parse = parse;

const regexOriginal = /^([A-Z]{1,2})(\d{1,4})$/;
const regexReversed = /^(\d{1,4})([A-Z]{1,2})$/;

function parse(vrm) {
	const match = vrm.match(regexOriginal) || vrm.match(regexReversed);

	if (!match)
		return null;

	// todo: check areas

	return {
		prettyVrm: match.slice(1).join(' '),
	};
}
