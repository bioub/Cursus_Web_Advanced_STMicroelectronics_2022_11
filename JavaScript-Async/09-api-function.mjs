// le this global est undefined en mode strict
// en module ESM on est en mode strict par défaut (donc dans Cube2)
// 'use strict';

globalThis.name = 'Romain'

function hello(n1, n2) {
  console.log(this); // global object en mode sloppy (global ou window)
  // undefined en mode strict ou en module ESM (strict par défaut)
  console.log(`Hello ${n1}, ${n2}, my name is ${this.name}`);
}

// les fonctions peuvent s'utiliser comme des valeurs en JS :

const bonjour = hello; // passage par référence
// hello et bonjour pointent vers la même fonction en mémoire
// bonjour(); // Hello undefined, undefined, my name is undefined

// les fonctions sont des objets
// on a un type Function

console.log(typeof hello); // 'function'
console.log(hello instanceof Function); // true

function Jeu() {

}

Jeu.prototype.jouer = function() {}; // Jeu. -> Jeu est un objet
// de type Function, la doc de Function :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

// hello('Toto', 'Titi'); // Hello Toto, Titi, my name is undefined

console.log(hello.length); // 2 (2 params n1 et n2)
console.log(hello.name); // hello
console.log(hello.toString()); // normé récemment (ES2018 ou ces années là)


// on peut affecter une valeur à this

const user = {
  name: 'Tata'
};

// soit au moment de l'appel
hello.call(user, 'Toto', 'Titi'); // Hello Toto, Titi, my name is Tata
hello.apply(user, ['Toto', 'Titi']); // Hello Toto, Titi, my name is Tata
hello.call(user, ...['Toto', 'Titi']); // Hello Toto, Titi, my name is Tata

// soit en déclarant une variante de la fonction
const helloUser = hello.bind(user);
helloUser('Toto', 'Titi');  // Hello Toto, Titi, my name is Tata
