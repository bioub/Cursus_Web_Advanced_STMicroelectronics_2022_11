// on force le type de inputEl à HTMLInputElement
const inputEl = document.querySelector('.myClass') as HTMLInputElement;

// variante issue de Java (pas recommandé)
// const inputEl = <HTMLInputElement> document.querySelector('.myClass');

console.log(inputEl.value);

// if (inputEl) {
//   console.log(inputEl.value);
// }
