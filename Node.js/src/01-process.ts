import process from "node:process";
import fs from 'node:fs';
import path from 'node:path';

// Le CWD est le dossier dans lequel on se trouve
// en ligne de commande (la où on a cd ...)
console.log(process.cwd());
console.log(fs.existsSync('package.json')); // dépend du CWD

// déplace le CWD (import.meta doit rester dans ce fichier, ne pas factoriser)
process.chdir(path.dirname(path.dirname(new URL(import.meta.url).pathname)));
console.log(fs.existsSync('package.json')); // toujours true

// infos sur l'environnement
console.log(process.version); // v16.16.0
console.log(process.versions); // des libs embarquées par Node
console.log(process.platform); // darwin (Mac OS), win32 (Windows), linux (Linux)
console.log(process.arch); // arm64, x86...

// arguments
// libs : yargs, minimist, commander, meow...
// ex: node dist/01-process.js --filename test.js --mode production --debug
console.log(process.argv.slice(2)); // [ '--filename', 'test.js', '--mode', 'production', '--debug' ]

// variable d'environnement
console.log(process.env.NODE_ENV); // si production on est prod
console.log(process.env.PATH?.split(':').filter((el) => el.includes('node')));

// streams
// process.stdin / process.stdout / process.stderr

// stats
console.log(process.cpuUsage());
console.log(process.memoryUsage());
console.log(process.uptime());

// killer le process
process.exit(0); // success
process.exit(1); // error
