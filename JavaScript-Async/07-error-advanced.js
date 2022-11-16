// const fs = require('fs/promises');

// async function copy() {
//   try {
//     const buffer = await fs.readFile(".editorconfig");

//     try {
//       await fs.access('./tmp');
//     } catch (err) {
//       if (err.code === 'ENOENT') {
//         await fs.mkdir('./tmp');
//       } else {
//         throw err;
//       }
//     }

//     await fs.writeFile("./tmp/.editorconfig", buffer);
//     console.log("DONE");
//   } catch (err) {
//     console.log("Erreur : " + err.message);
//   }
// }

// copy();


const fs = require('fs/promises');

async function ensureDir(dirPath) {
  try {
    await fs.access(dirPath);
  } catch (err) {
    // if (err instanceof RangeError) {

    // }

    if (err.code === 'ENOENT') {
      await fs.mkdir(dirPath);
    } else {
      throw err;
    }
  }
}

async function copy() {
  try {
    const buffer = await fs.readFile(".editorconfig");

    await ensureDir('./tmp');

    await fs.writeFile("./tmp/.editorconfig", buffer);
    console.log("DONE");
  } catch (err) {
    console.log("Erreur : " + err.message);
  }
}

copy();
