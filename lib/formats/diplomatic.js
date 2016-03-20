exports.ref = 'diplomatic';
exports.validFrom = 1979;
exports.parse = parse;

const regex = /^(\d{3})(D|X)(\d{3})$/;

function parse(vrm) {
	const match = vrm.match(regex);

	if (!match)
		return null;

	// todo: check areas

	return {
		prettyVrm: match.slice(1).join(' '),
	};
}
