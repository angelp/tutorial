// Modules
const { john, peter } = require('./3-1-names');
const sayHi = require('./3-2-utils');
const data = require('./3-3-alternative-flavor');

// inside there is console.log: echos to console
require('./3-4-mind-grenade');

const fs = require('fs');
console.log(fs.Dir);

sayHi('Susan');
sayHi(john);
sayHi(peter);
