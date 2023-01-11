type HelloProps = {
  name: string;
  age?: number;
  isActive?: boolean;
};

// function Hello(props: HelloProps) {
//   const name = props.name;
//   return <div className="Hello">Hello {props.name}</div>;
// }

function Hello({ name, age = 0, isActive = false }: HelloProps) {

  // let spanEl;
  
  // if (isActive) {
  //   spanEl = <span> (active)</span>;
  // }

  // const spanEl = isActive && <span> (active)</span>;

  // return (
  //   <div className="Hello">
  //     Hello {name}
  //     {spanEl}
  //   </div>
  // );

  return (
    <div className="Hello">
      Hello {name}
      {isActive && <span> (active)</span>}
    </div>
  );
}

export default Hello;

// object destructuring (ES2015)
// const coords = {x: 1, y: 2};
// // const x = coords.x;
// // const y = coords.y;
// const { x = 0, y = 0 } = coords;
