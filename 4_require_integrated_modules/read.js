// Загрузка модуля fs (файловая система)
var fs = require('fs');

// Считывание содержимого файла в память

// works async
fs.readFile('work_with_files/example_log.txt', function (err, logData) {

	// Если произошла ошибка, то мы генерируем исключение,
	// и работа приложения завершается
	if (err) throw err;

	// logData имеет тип Buffer, переводим в string
	var text = logData.toString();

	console.log(text);
});