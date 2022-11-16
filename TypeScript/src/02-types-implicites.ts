// Inference de Types
// Affecter une valeur type la variable

let now = new Date();
let firstName = 'Romain';
let isActive = true;
let id = 123;
// id = 'ABC'; // Erreur

function bonjour(prenom = '') {
  return `Bonjour ${prenom}`;
}
