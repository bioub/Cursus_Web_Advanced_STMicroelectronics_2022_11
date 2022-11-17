
// si exports.hello = hello
// const hello = require('./hello');
// console.log(hello.hello('Romain'));

// si exports.hello = hello
// const hello = require('./hello').hello;
// console.log(hello('Romain'));

// si exports.hello = hello
// const { hello } = require('./hello');
// console.log(hello('Romain'));

const hello = require('./hello');
console.log(hello('Romain'));
