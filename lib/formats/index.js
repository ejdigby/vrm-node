const fs = require('fs');

const formats = [];

fs.readdirSync(__dirname)
.filter(function (f) { return (f.indexOf('.') !== 0) && (f !== 'index.js'); })
.forEach(function (f) { formats.push(require('./' + f)); });

formats.sort(function (a, b) {
	return b.validFrom - a.validFrom;
});

const map = {};

formats.forEach(function (format) {
	map[format.ref] = format;
});

exports.all = formats;
exports.map = map;
