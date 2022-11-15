
type primitive = string | number | boolean;

function logPrimitive(val: primitive) {
  console.log(val);
}


showPrimitive(123);
showPrimitive('234');
showPrimitive(true);
// showPrimitive([]); erreur

type Coords = {
  x: 1,
  y: 2,
};

function logCoords(val: Coords) {
  console.log(val);
}

logCoords({x: 1, y: 2})
