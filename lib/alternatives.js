exports = module.exports = generateCombinations;

const equivalent = [
	['0', 'O'],
	['1', 'I'],
];

const substitutable = [];
const substitutes = {};

equivalent.forEach(function (eq) {
	eq.forEach(function (char) {
		substitutable.push(char);
		substitutes[char] = eq;
	});
});

function generateCombinations(input) {
	const substituteIndexes = [];

	for (var i = 0; i < input.length; i++) {
		if (substitutable.indexOf(input[i]) !== -1)
			substituteIndexes.push(i);
	}

	if (!substituteIndexes.length)
		return [input];

	const sets = substituteIndexes.map(function (idx) {
		return substitutes[input[idx]];
	});

	const combinations = cartesianProduct(sets);
	const splitInput = input.split('');

	return combinations.map(function (combination) {
		const splitString = splitInput.slice();

		for (var i = 0; i < substituteIndexes.length; i++)
			splitString[substituteIndexes[i]] = combination[i];

		return splitString.join('');
	});
}

function cartesianProduct(sets) {
	const combos = [];
	const p = [];
	const max = sets.length - 1;
	const lens = [];

	for (var i = sets.length; i--;)
		lens[i] = sets[i].length;

	function dive(d) {
		const a = sets[d];
		const len = lens[d];

		if (d === max) {
			for (var i = 0; i < len; ++i) {
				p[d] = a[i];
				combos.push(p.slice());
			}
		} else {
			for (var j = 0; j < len; ++j) {
				p[d] = a[j];
				dive(d + 1);
			}
		}

		p.pop();
	}

	dive(0);

	return combos;
}
