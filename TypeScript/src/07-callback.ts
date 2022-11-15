const values = ['A', 'B', 'C'];

// les callbacks des APIs existants sont déjà typés
values.forEach((letter, index) => {
  console.log(letter, index);
});

// typer nos callback avec : () => returnType
function withCallback(cb: (value: string) => void) {
  cb('ABC');
}

