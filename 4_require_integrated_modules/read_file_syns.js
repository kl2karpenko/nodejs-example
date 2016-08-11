// Загрузка модуля fs (файловая система)
var fs = require('fs');

try {
// Считывание содержимого файла в память
	var file = fs.readFileSync('example_log.txt', "utf-8");
// work sync
} catch(e) {
	throw e;
}

console.log(file);

var ar = [1, 2, 3, 4];

for (var i = 0; i < ar.length; i++) {
	console.log(i);
}