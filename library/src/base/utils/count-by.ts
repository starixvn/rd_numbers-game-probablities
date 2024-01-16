export function countBy(
  counter: (ball: number) => boolean,
  balls: number[],
): number[] {
  const counted = balls.filter(counter).length;

  return [counted, balls.length - counted];
}
