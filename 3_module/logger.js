module.exports = function () {
	console.log(arguments);

	return function () {
		console.log(arguments, 'args');
	}
};