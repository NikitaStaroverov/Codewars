/** Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6*/
function digitalRoot(num) {
	num = num.toString().split('')
	if (num.length == 1) {
		return parseInt(num)
	} else {
		return digitalRoot(num.reduce((a, b) => (a += parseInt(b)), 0))
	}
}
