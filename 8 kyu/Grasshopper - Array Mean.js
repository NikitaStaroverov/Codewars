//Find the mean (average) of a list of numbers in an array.
var findAverage = function (nums) {
	// Code here
	let sum = 0
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
	}
	let del = sum / nums.length
	return del
}
