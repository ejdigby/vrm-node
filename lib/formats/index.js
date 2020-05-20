const formatNames = [
	"diplomatic", "gb-1932", "gb-1983", "ni-1903", "gb-1903",
	"gb-1963", "gb-2001", "military", "ni-1966"
]

const formats = [];

formatNames.forEach(function (f) { formats.push(require('./' + f)); });

const map = {};

formats.forEach(function (format) {
	map[format.ref] = format;
});

exports.all = formats;
exports.map = map;
