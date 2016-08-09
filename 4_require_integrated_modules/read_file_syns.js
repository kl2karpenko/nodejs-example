// Загрузка модуля fs (файловая система)
var fs = require('fs');

// Считывание содержимого файла в память
var file = fs.readFileSync('work_with_files/example_log.txt');
// work sync

console.log(file);