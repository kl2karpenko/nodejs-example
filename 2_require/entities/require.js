var number = require('./export');
var obj = require('./export_obj');
var sum = require('./export_func');

console.log(number);

// get method of object
obj.method1();

// this function get sum of 2 vars
console.log(sum(9,8));
