exports.ref = '1963';
exports.validFrom = 1963;
exports.parse = parse;

const regex = /^([A-Z]{3})(\d{1,3}[A-Z])$/;

function parse(vrm) {
	const match = vrm.match(regex);

	if (!match)
		return null;

	// todo: check areas

	return {
		prettyVrm: match.slice(1).join(' '),
	};
}
