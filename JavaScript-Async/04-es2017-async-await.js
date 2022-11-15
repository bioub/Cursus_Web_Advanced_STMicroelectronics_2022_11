const fs = require("fs/promises");

async function read() {
  const buffer = await fs.readFile('.editorconfig')
  console.log(buffer.toString('utf-8'))
  return buffer;
}

read();
console.log('DONE');

// pile d'appels
// ^
// |
// |[readFile][done] ⟳          [toString]
// +-------------------------------------------------> temps

// async function copy() {
//   try {
//     const buffer = await fs.readFile(".editorconfig");
//     console.log(buffer.toString("utf-8"));
//     await fs.writeFile(".editorconfig.copy", buffer);
//     console.log("DONE");
//   } catch (err) {
//     console.log("Erreur : " + err.message);
//   }
// }

// copy();


async function copy() {
  try {
    const buffer = await read();
    await fs.writeFile(".editorconfig.copy", buffer);
    console.log("DONE");
  } catch (err) {
    console.log("Erreur : " + err.message);
  }
}

copy();
