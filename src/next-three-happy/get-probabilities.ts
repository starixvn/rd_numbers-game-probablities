import { NextThreeHappyOptions } from "./types";
import * as CombineDrawnBase from "../base/combine-over-under";
import { TOTAL_BALLS, BALLS_EACH_TURN, MEDIAN } from "./constants";

export function getProbabilities(drawn: number[]): NextThreeHappyOptions {
  const OVER_UNDER_RESULT = CombineDrawnBase.getProbabilities(drawn, TOTAL_BALLS, MEDIAN, BALLS_EACH_TURN);

  const result: NextThreeHappyOptions = {
    over: OVER_UNDER_RESULT.over,
    under: OVER_UNDER_RESULT.under,
  };

  return result;
}
