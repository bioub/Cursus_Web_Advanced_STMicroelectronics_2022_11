const field = document.querySelector('input')

// field étant de type HTMLInputElement | null

// il faut tester que field !== null pour accéder à son contenu
// avec un if
if (field) {
  console.log(field.value);
}

// avec le ET logique
console.log(field && field.value);

// avec optional chaining (ES2020)
console.log(field?.value);
