const { getRandomIntInclusive } = require("./random");

exports.pileOuFace = function () {
  return getRandomIntInclusive(0, 1) ? "pile" : "face";
};
