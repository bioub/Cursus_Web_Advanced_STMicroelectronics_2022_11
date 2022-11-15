const fs = require("fs");

// sync
try {
  const buffer = fs.readFileSync(".editorconfig");
  console.log(buffer.toString("utf-8"));
  fs.writeFileSync(".editorconfig.copy", buffer);
  console.log("DONE");
} catch (err) {
  console.log("Erreur : " + err.message);
}

// async
// callback hell / pyramid of doom
fs.readFile(".editorconfig", (err, buffer) => {
  if (err) {
    console.log("Erreur : " + err.message);
  } else {
    console.log(buffer.toString("utf-8"));
    fs.writeFile(".editorconfig.copy", buffer, (err) => {
      if (err) {
        console.log("Erreur : " + err.message);
      } else {
        console.log("DONE");
      }
    });
  }
});
