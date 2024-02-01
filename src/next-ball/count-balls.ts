import { countBy, isOdd, isOver } from "../base/utils";
import { NextBallOptions } from "./types";

export function countBalls(balls: number[], overFactor: number): NextBallOptions {
  const [odd, even] = countBy(isOdd, balls);
  const [over, under] = countBy(isOver(overFactor), balls);

  return { odd, even, over, under };
}
