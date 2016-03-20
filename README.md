# vrm

Coerces, validates and prettifies vehicle registration marks (VRMs). Presently,
only UK DVLA registration plate formats are supported. Please open an issue if
you'd like to see support added for other driving authorities' formats - I'd be
keen to work with you to enable this.

```js
import VRM from 'vrm';

console.log(VRM.coerce('Lbo7 se0')); // => [{ format: 'tbc', vrm: 'LB07SEO', prettyVrm: 'LB07 SEO' }]
console.log(VRM.coerce('Lbo7 se0', ['tbc'])); // => [{ format: 'tbc', vrm: 'LB07SEO', prettyVrm: 'LB07 SEO' }]
console.log(VRM.coerce('Lbo7 se0', ['abc'])); // => []
console.log(VRM.info('LB07SEO')); // => { format: 'tbc', vrm: 'LB07SEO', prettyVrm: 'LB07 SEO' }
console.log(VRM.info('LB07SEO', 'tbc')); // => { format: 'tbc', vrm: 'LB07SEO', prettyVrm: 'LB07 SEO' }
console.log(VRM.info('LB07SEO', 'abc')); // => null
```

## Installation

```bash
$ npm install vrm
```

## API

### `VRM.coerce(input[, allowedFormats])`

Coerces the input into a set of possible VRMs which the input could represent.
See [more information below](#Coercion) about why this is needed.

The returned array contains the VRM details for each given format, sorted in
order of likelihood, where the most likely format is the first value.

If the allowed formats are specified, coercion will be limited to these formats.
Any other formats will not be checked.

Returns an empty array if the input is invalid or cannot be coerced into any of
the formats checked.

Throws if any of the allowed formats are not known.

### `VRM.info(normalizedVRM[, format])`

Verifies that the given VRM matches one of the known formats and returns the
relevant VRM details. Only normalized VRMs are accepted.

If the format is specified, only that format is checked.

Returns null if the VRM does not match any of the formats checked.

Throws if the provided format is not known.

## Notes

### Formats

The known formats are referenced as the following strings:

- `tbc` - todo: define these!

### VRM Details

The VRM details objects returned include the following information:

```js
{
	format: 'tbc', // required, string - format referenced as-above
	vrm: 'LB07SEO', // required, string - vrm in upper case, no spaces, no special chars, etc.
	prettyVrm: 'LB07 SEO', // optional, string - vrm spaced as legally defined
}
```

More information is likely to be added to this object over time. These changes
would not be considered as 'breaking'.

### Coercion

UK registration plates use a particular official typeface which was designed by
Charles Wright. Bizarrely, it uses exactly the same physical shape for I and 1,
and for O and 0. This means that the exact VRM can be ambiguous and people often
mistype the VRM into forms. Additionally, it presents some difficulties for
automatic number plate recognition (ANPR) systems.

The `coerce` method handles this. It returns an array because (occasionally)
multiple formats can be possible.

The returned array is ordered with the original input first if it is valid,
followed by the other valid options with the newer formats coming first. This
behavior could change though, so don't rely on it.

### Possible Additions

If there is demand for it, two other bits of functionality could be provided:

- normalization: normalizing an arbitrary string input without coercing it (this happens internally anyway)
- extending `info`: extracting the data from a given VRM - e.g. the 2001 UK format contains information about the area and year of registration

## Support

Please open an issue on this repository.

## Authors

- James Billingham <james@jamesbillingham.com>
- adapted from Jack Fransham's original work

## License

MIT licensed - see [LICENSE](LICENSE) file
