var log = require('../logger')(module);

console.log(module, 'User.index');

// >> module << - is the var that describes the current module

// id: name or path to the module,
// exports: data that exports outside of the module,
// parent: parent module that required this module
// filename: current file name,
// loaded: bool => state of file,
// children: children modules id have

function User (name) {
	this.name = name;
}

User.prototype.hello = function () {
	let helloPhrase = `Hello ${this.name}`;

	log(helloPhrase);
	return helloPhrase;
};

module.exports = User;