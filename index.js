// index.js

let lodash = require('lodash');
let capitalString =
  lodash.capitalize('hello world!');
// console.log(capitalString); // Hello world!

const fs = require('fs');

fs.writeFile('hello.txt', 'Hey there world', err => {
  if (err) throw err;
  console.log('successfully saved');
});
