const fs = require('fs/promises');
const path = require('path');
const md5 = require('md5');
const { minify } = require('terser');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function build() {
  await fs.rm(distPath, { force: true, recursive: true });
  await fs.mkdir(distPath);

  // Exercice 3
  // utiliser fs.readFile pour lire les fichiers
  // horlogeJsPath et indexJsPath
  // et fs.appendFile pour écrire dans appJsDistPath

  // Exercice 4
  // fs.readFile et fs.writeFile pour écrire
  // buffer.toString('utf-8') pour convertir un buffer en string
  // str = str.replace('oldvalue', 'newvalue');
}

build();
