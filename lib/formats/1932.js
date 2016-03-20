exports.ref = '1932';
exports.validFrom = 1932;
exports.parse = parse;

const regexOriginal = /^([A-Z]{3})(\d{1,3})$/;
const regexReversed = /^(\d{1,3})([A-Z]{3})$/;

function parse(vrm) {
	const match = vrm.match(regexOriginal) || vrm.match(regexReversed);

	if (!match)
		return null;

	// todo: check areas

	return {
		prettyVrm: match.slice(1).join(' '),
	};
}
