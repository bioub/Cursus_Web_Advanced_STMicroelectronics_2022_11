const fs = require("node:fs/promises");
const path = require("node:path");
const md5 = require("md5");
const { minify } = require("terser");

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");
const horlogeJsPath = path.resolve(srcPath, "js", "horloge.js");
const indexJsPath = path.resolve(srcPath, "js", "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");
const appJsDistPath = path.resolve(distPath, "app.js");

async function rmAndMkdir() {
  await fs.rm(distPath, { force: true, recursive: true });
  await fs.mkdir(distPath);
}

async function buildJs() {
  // Exercice 3
  // utiliser fs.readFile pour lire les fichiers
  // horlogeJsPath et indexJsPath
  // et fs.appendFile pour écrire dans appJsDistPath
  // const bufferHorloge = await fs.readFile(horlogeJsPath);
  // const bufferIndex = await fs.readFile(indexJsPath);
  // pile d'appels
  // ^
  // |
  // |[readFile] ⟳          [readFile] ⟳          [appendFile]
  // +---------------------------------------------------------> temps

  const [bufferHorloge, bufferIndex] = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath)
  ]);

  // pile d'appels
  // ^
  // |
  // |[readFile][readFile] ⟳             [appendFile]
  // +---------------------------------------------------------> temps

  await fs.appendFile(appJsDistPath, bufferHorloge);
  await fs.appendFile(appJsDistPath, bufferIndex);
  // await fs.writeFile(appJsDistPath, Buffer.concat([bufferHorloge, bufferIndex]));
}

async function buildHtml() {
  // Exercice 4
  // fs.readFile et fs.writeFile pour écrire
  // buffer.toString('utf-8') pour convertir un buffer en string
  // str = str.replace('oldvalue', 'newvalue');
  let contentIndexHtml = await fs.readFile(indexHtmlPath, {
    encoding: "utf-8",
  });

  contentIndexHtml = contentIndexHtml
    .replace(
      '<script src="./js/horloge.js"></script>',
      '<script src="./app.js"></script>'
    )
    .replace('<script src="./js/index.js"></script>', "");

  await fs.writeFile(indexHtmlDistPath, contentIndexHtml);
}

async function build() {
  try {
    await rmAndMkdir();
    await buildJs();
    await buildHtml();
  } catch (err) {
    console.log('Err : ' + err.message);
    process.exit(1);
  }
}

build();
