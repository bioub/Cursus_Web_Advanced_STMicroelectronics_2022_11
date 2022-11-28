const values = ['A', 'B', 'C'];

// les callbacks des APIs existants sont déjà typés
values.forEach((letter, index) => {
  console.log(letter, index);
});

// typer nos callback avec : () => returnType
function withCallback2(cb: (value: string) => void) {
  cb('ABC');
}

interface Callback {
  (value: string): void
}

// typer nos callback avec : () => returnType
function withCallback3(cb: Callback) {
  cb('ABC');
}


withCallback3((val) => {

})
