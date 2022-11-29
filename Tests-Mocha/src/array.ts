export function range(min: number, max: number) {
  const values: number[] = [];

  for (let i = min; i <= max; i++) {
    values.push(i);
  }

  return values;
}