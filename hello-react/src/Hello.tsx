type HelloProps = {
  name?: string;
};

function Hello({ name }: HelloProps) {
  return <div className="Hello">Hello {name}</div>;
}

export default Hello;

// object destructuring (ES2015)
// const coords = {x: 1, y: 2};
// // const x = coords.x;
// // const y = coords.y;
// const { x = 0, y = 0 } = coords;