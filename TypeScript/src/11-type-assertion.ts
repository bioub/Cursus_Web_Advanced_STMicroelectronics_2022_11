// on force le type de inputEl √† HTMLInputElement
const inputEl = document.querySelector('.myClass') as HTMLInputElement;

// variante issue de Java (pas recommand√©)
// const inputEl = <HTMLInputElement> document.querySelector('.myClass');

console.log(inputEl.value);

// if (inputEl) {
//   console.log(inputEl.value);
// }
