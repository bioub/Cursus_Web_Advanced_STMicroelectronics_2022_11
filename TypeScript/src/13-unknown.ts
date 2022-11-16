// function log(param: any) {
//   console.log(param.toUpperCase());
// }

function log(param: unknown) {
  if (typeof param === 'string') {
    console.log(param.toUpperCase());
  }
  if (param instanceof Array) {
    for (const el of param) {
      if (typeof el === 'string') {
        console.log(el.toUpperCase());
      }
    }
  }
}

log('ABC');
log(123);
log(['A', 'B', 'C']);
