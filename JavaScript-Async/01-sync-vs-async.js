const fs = require('fs');

// sync
// le thread est bloqué tant que le fichier n'a pas été lu
const buffer = fs.readFileSync('.editorconfig');
console.log(buffer.toString('utf-8'));
console.log('DONE');

// pile d'appels
// ^
// |
// |[readFileSync              ][toString][done]
// +-------------------------------------------------> temps

// async
// le thread est disponible pour exécuter la suite
// un callback sera appelé lorsque que le fichier aura été lu
// et que le thread sera disponible
fs.readFile('.editorconfig', (err, buffer) => {
  console.log(buffer.toString('utf-8'));
});
console.log('DONE');

// pile d'appels
// ^
// |
// |[readFile][done] ⟳          [toString]
// +-------------------------------------------------> temps
