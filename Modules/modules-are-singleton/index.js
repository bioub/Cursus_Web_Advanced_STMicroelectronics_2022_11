const random = require('./random');
random.getRandomIntInclusive = () => 1;

const { pileOuFace } = require("./pile-ou-face");


console.log(pileOuFace());


// require des modules natifs de Node
// fs, os, readline...

// si require('fs') -> singleton (objet en cache)
// si require('node:fs') -> pas de singleton (nouvel objet à chaque require)
