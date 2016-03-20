const fs = require('fs');

const formats = [];

fs.readdirSync(__dirname)
.filter(f => (f.indexOf('.') !== 0) && (f !== 'index.js'))
.forEach(f => { formats.push(require('./' + f)); });

formats.sort(function (a, b) {
	return a.validFrom - b.validFrom;
});

const map = {};

formats.forEach(function (format) {
	map[format.ref] = format;
});

exports.all = formats;
exports.map = map;
