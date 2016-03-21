exports.ref = 'military';
exports.validFrom = 1949;
exports.parse = parse;

const regexOriginal = /^(\d{2})([A-Z]{2})(\d{2})$/;
const regexReversed = /^([A-Z]{2})(\d{2})([A-Z]{2})$/;

function parse(vrm) {
	const match = vrm.match(regexOriginal) || vrm.match(regexReversed);

	if (!match)
		return null;

	return {
		prettyVrm: match.slice(1).join(' '),

		_extra: {
			sections: match.slice(1),
		},
	};
}
