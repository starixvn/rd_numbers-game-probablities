import { FIRST_HALF } from "./constants";
import { NextBallOptions } from "./types";

export function countBalls(
  balls: number[],
  overFactor = FIRST_HALF,
): NextBallOptions {
  const odd = balls.filter((ball) => ball % 2 === 1).length;
  const over = balls.filter((ball) => ball >= overFactor).length;

  return {
    odd,
    over,
    even: balls.length - odd,
    under: balls.length - over,
  };
}
