var http = require('http');
var read_json = require('./read_json');

// or just require

http
	.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(read_json));
	})
	.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');