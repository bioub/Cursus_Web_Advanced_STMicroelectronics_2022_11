function identity<T>(val: T): T {
  return val;
}

identity('ABC').toUpperCase();


function find<T = any>(tab: any[], index: number): T {
  return tab[index];
}


find<string>([1, true, 3, '4'], 3).toUpperCase();
