exports.ref = '1983';
exports.validFrom = 1983;
exports.parse = parse;

const regex = /^([A-Z]\d{1,3})([A-Z]{3})$/;

function parse(vrm) {
	const match = vrm.match(regex);

	if (!match)
		return null;

	// todo: check areas

	return {
		prettyVrm: match.slice(1).join(' '),
	};
}
