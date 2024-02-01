export function isOver(factor: number) {
  return function (ball: number): boolean {
    return ball >= factor;
  };
}
