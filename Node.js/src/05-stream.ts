// Dans Node.js les streams sont une abstraction
// d'une suite d'octet (en lecture, écriture, les 2, en transformation)
// ReadStream -> lecture
// WriteStream -> écriture
// DuplexStream -> lecture + écriture
// TransformStream -> lecture -> transformation -> écriture

import fs from 'node:fs';
import { createGzip } from 'node:zlib';

const readStream = fs.createReadStream('bigfile.html');
const writeStream = fs.createWriteStream('bigfile.html.gz');

readStream.on('open', () => {
  console.log('bigfile opened');
});

readStream.on('data', (chunk) => {
  console.log('bigfile data length ' + chunk.length);
});

readStream.on('close', () => {
  console.log('bigfile closed');
});

// Avec les streams on va pouvoir utiliser la méthode .pipe
// équivalent dans un programme Shell :
// cat bigfile.html | gzip > bigfile.html.gz
readStream.pipe(createGzip()).pipe(writeStream);
