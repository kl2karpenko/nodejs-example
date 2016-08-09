var fs = require('fs');

module.exports = JSON.parse(fs.readFileSync('server/phones.json', 'utf8'));
