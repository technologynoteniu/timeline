const csv2json = require('csvjson-csv2json');
const fs = require('fs');

var content = fs.readFileSync('../posts.csv', 'utf8');

const json = csv2json(content, {parseNumbers: true});
console.log(json);
