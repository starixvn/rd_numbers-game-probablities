import { countBy } from "../utils";
import { RedBlueCounted } from "./types";

export function countBalls(balls: number[], redBalls: number[]): RedBlueCounted {
  const isRed = (ball: number): boolean => {
    return redBalls.indexOf(ball) >= 0;
  };

  const [red, blue] = countBy(isRed, balls);
  return {
    red: red,
    blue: blue,
  };
}
