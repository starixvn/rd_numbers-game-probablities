import { ok } from "node:assert";
import {
  OVER_OR_ODD,
  OVER_ODD_OPTIONS,
  UNDER_EVEN_OPTIONS,
  TOTAL_BALLS,
  UNDER_OR_EVEN,
} from "./constants";
import { countBalls } from "./count-balls";
import type { NextBallOptions } from "./types";

export function getOdds(drawn: number[] = []): NextBallOptions {
  ok(TOTAL_BALLS >= drawn.length);

  const count = countBalls(drawn, OVER_OR_ODD);
  const toOdds =
    (numberOfBalls: number) => (option: keyof NextBallOptions) => ({
      [option]: (TOTAL_BALLS - drawn.length) / (numberOfBalls - count[option]),
    });

  return Object.assign(
    {},
    ...OVER_ODD_OPTIONS.map(toOdds(OVER_OR_ODD)),
    ...UNDER_EVEN_OPTIONS.map(toOdds(UNDER_OR_EVEN)),
  );
}
