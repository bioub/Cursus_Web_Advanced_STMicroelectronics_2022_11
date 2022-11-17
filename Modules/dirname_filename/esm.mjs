import path from 'node:path';

console.log(typeof __filename); // undefined
console.log(typeof __dirname); // undefined


console.log(import.meta.url); // file:///Users/romain/Desktop/Cursus_Web_Advanced_STMicroelectronics_2022_11/Modules/dirname_filename/esm.mjs

const filename = (new URL(import.meta.url)).pathname;
const dirname = path.dirname(filename);

console.log(filename);
console.log(dirname);
