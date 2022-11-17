import path from 'node:path';

// dépend du CWD :
console.log(path.join('..', '..', 'Slides'));

// dépend du CWD :
console.log(path.resolve('..', '..', 'Slides'));

console.log(path.extname(import.meta.url)); // .ts
console.log(path.parse(import.meta.url)); //

const dirname = path.dirname(new URL(import.meta.url).pathname);

// dépend du fichier 03-path.ts
console.log(path.join(dirname, '..', '..', 'Slides'));
console.log(path.resolve(dirname, '..', '..', 'Slides'));
