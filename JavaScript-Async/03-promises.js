const fs = require("fs/promises");

// async
// callback hell / pyramid of doom
// fs.readFile(".editorconfig", (err, buffer) => {
//   if (err) {
//     console.log("Erreur : " + err.message);
//   } else {
//     console.log(buffer.toString("utf-8"));
//     fs.writeFile(".editorconfig.copy", buffer, (err) => {
//       if (err) {
//         console.log("Erreur : " + err.message);
//       } else {
//         console.log("DONE");
//       }
//     });
//   }
// });

// callback hell
// fs.readFile(".editorconfig")
//   .then((buffer) => {
//     fs.writeFile(".editorconfig.copy", buffer)
//       .then(() => {
//         console.log("DONE");
//       })
//       .catch((err) => {
//         console.log("Erreur : " + err.message);
//       })
//   })
//   .catch((err) => {
//     console.log("Erreur : " + err.message);
//   });

// pour éviter le callback hell
// si dans un callback du .then ou .catch
// on retourne une promesse alors le .then ou .catch suivant
// peut ne pas être imbriqué
fs.readFile(".editorconfig")
  .then((buffer) => {
    return fs.writeFile(".editorconfig.copy", buffer);
  })
  .then(() => {
    console.log("DONE");
  })
  .catch((err) => {
    console.log("Erreur : " + err.message);
  });

// version raccourcie (si pas d'accolades {}, ce qui suit =>
// est la valeur de retour)
fs.readFile(".editorconfig")
  .then((buffer) => fs.writeFile(".editorconfig.copy", buffer))
  .then(() => console.log("DONE"))
  .catch((err) => console.log("Erreur : " + err.message));
