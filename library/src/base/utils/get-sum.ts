function add(partial: number, x: number) {
  return partial + x;
}

export function getSum(array: number[]): number {
  return array.reduce(add, 0);
}
