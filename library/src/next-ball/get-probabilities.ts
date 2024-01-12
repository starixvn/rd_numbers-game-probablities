import { ok } from "node:assert";
import { OVER_OR_ODD, OVER_ODD_OPTIONS, UNDER_EVEN_OPTIONS, TOTAL_BALLS, UNDER_OR_EVEN } from "./constants";
import { countBalls } from "./count-balls";
import type { NextBallOptions } from "./types";

export function getProbabilities(drawn: number[] = []): NextBallOptions {
  ok(TOTAL_BALLS >= drawn.length);

  const count = countBalls(drawn, OVER_OR_ODD);
  const toProbabilities = (numberOfBalls: number) => (option: keyof NextBallOptions) => ({
    [option]: (numberOfBalls - count[option]) / (TOTAL_BALLS - drawn.length),
  });

  return Object.assign(
    {},
    ...OVER_ODD_OPTIONS.map(toProbabilities(OVER_OR_ODD)),
    ...UNDER_EVEN_OPTIONS.map(toProbabilities(UNDER_OR_EVEN))
  );
}
