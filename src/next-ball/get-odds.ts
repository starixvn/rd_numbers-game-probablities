import {
  FIRST_HALF,
  SECOND_HALF,
  TOTAL_BALLS,
  FIRST_HALF_OPTIONS,
  SECOND_HALF_OPTIONS,
} from "./constants";
import { countBalls } from "./count-balls";
import type { NextBallOptions } from "./types";

export function getOdds(drawn: number[] = []): NextBallOptions {
  const count = countBalls(drawn);
  const toOdds =
    (numberOfBalls: number) => (option: keyof NextBallOptions) => ({
      [option]: (TOTAL_BALLS - drawn.length) / (numberOfBalls - count[option]),
    });

  return Object.assign(
    {},
    ...FIRST_HALF_OPTIONS.map(toOdds(FIRST_HALF)),
    ...SECOND_HALF_OPTIONS.map(toOdds(SECOND_HALF)),
  );
}
