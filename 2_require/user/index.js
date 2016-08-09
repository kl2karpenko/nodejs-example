// var log = require('../logger')(module);

function User (name) {
	this.name = name;
}

User.prototype.hello = function () {
	let helloPhrase = `Hello ${this.name}`;

	console.log(helloPhrase);
	return helloPhrase;
};

// module.exports === export === this

module.exports = User;