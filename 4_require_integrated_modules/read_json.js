// Загрузка модуля fs (файловая система)
var fs = require('fs');

// Считывание содержимого файла в память
fs.readFile('phones.json', function (err, logData) {

	// Если произошла ошибка, то мы генерируем исключение,
	// и работа приложения завершается
	if (err) throw err;

	// logData имеет тип Buffer, переводим в string
	var json = JSON.parse(logData);

	console.log(json);
});