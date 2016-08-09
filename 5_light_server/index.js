var http = require('http');

var server = new http.Server(function (req, res) {
	console.log(req.method, req.url);

	res.end();
});

server.listen(8077, "127.0.0.1");