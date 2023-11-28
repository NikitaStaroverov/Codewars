/**We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */
function getCount(str) {
	const matched = str.match(/[aeiou]/gi)
	return matched ? matched.length : 0
}
