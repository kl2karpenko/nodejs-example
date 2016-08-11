var http = require('http');
var fs = require('fs');

var server = new http.Server(function (req, res) {
	console.log(req.method, req.url);

	if (req.url === "/echo") {
		fs.readFile("5_light_server/phones.json",
			function (err, data) {
				res.end(data);
			});
	} else if (req.url === "/login") {
		fs.readFile("5_light_server/phones.json",
			function (err, data) {
				res.end(data);
			}
			);
	} else {
		res.writeHead(404, {
			"Content-Type": "text/plain"
		});
		res.write("404 Not Found\n");
		res.end();
	}

});

server.listen(8077, "127.0.0.1");