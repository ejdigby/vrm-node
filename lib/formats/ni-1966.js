exports.ref = 'ni_1966';
exports.validFrom = 1966;
exports.parse = parse;

// this format is likely to become reversible

const regex = /^([A-Z]{3})(\d{1,4})$/;

function parse(vrm) {
	const match = vrm.match(regex);

	if (!match)
		return null;

	const serial = match[1].substr(0, 1);
	const area = match[1].substr(1, 2);
	const seq = parseInt(match[2], 10);

	if (!acceptableArea(area))
		return null;

	return {
		prettyVrm: match.slice(1).join(' '),

		_extra: {
			serialLetter: serial,
			area: area,
			sequence: seq,
		},
	};
}

function acceptableArea(area) {
	for (var i = 0; i < area.length; i++) {
		if (area[i] === 'I' || area[i] === 'Z')
			return true;
	}

	return false;
}
