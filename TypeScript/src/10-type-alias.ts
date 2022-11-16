
type primitive = string | number | boolean;

function logPrimitive(val: primitive) {
  console.log(val);
}


logPrimitive(123);
logPrimitive('234');
logPrimitive(true);
// showPrimitive([]); erreur

type Coords = {
  x: 1,
  y: 2,
};

function logCoords(val: Coords) {
  console.log(val);
}

logCoords({x: 1, y: 2})

type cbWithCallback = (value: string) => void;

function withCallback(cb: cbWithCallback) {
  cb('ABC');
}

