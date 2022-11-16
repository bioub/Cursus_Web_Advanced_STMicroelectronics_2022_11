import fs from "fs/promises";

// import path from 'path';
// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Depuis ES2022, dans un module ESM
// on peut utiliser await à la racine du module
// Top-level await
try {
  const buffer = await fs.readFile(".editorconfig");
  console.log(buffer.toString("utf-8"));
  await fs.writeFile(".editorconfig.copy", buffer);
  console.log("DONE");
} catch (err) {
  console.log("Erreur : " + err.message)
}
