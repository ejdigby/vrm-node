exports.ref = '2001';
exports.validFrom = 2001;
exports.parse = parse;

const regex = /^([A-Z]{2}\d{2})([A-Z]{3})$/;

function parse(vrm) {
	const match = vrm.match(regex);

	if (!match)
		return null;

	// todo: check areas

	return {
		prettyVrm: match.slice(1).join(' '),
	};
}
