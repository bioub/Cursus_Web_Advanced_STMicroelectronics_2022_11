const coords = {
  x: 1,
  y: 2,
};


// coords.z = 3; les objets TypeScript ne sont pas extensibles par défaut

function showCoords(coords: { x: number; readonly y: number, z?: number }) {
  console.log('x: ' + coords.x);
}

showCoords({
  x: 1,
  y: 2,
  // t: 34, les objets TypeScript ne sont pas extensibles par défaut
})


const extensibleCoords: {
  x: number;
  y: number;
  z?: number;
  [key: string]: any; // rend l'objet extensible
} = {
  x: 1,
  y: 2,
  t: 'ABC',
};
