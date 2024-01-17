import { LuckyThreeOptions } from "./types";
import * as CombineDrawnBase from "../base/combine-over-under";
import { TOTAL_BALLS, BALLS_EACH_TURN, MEDIAN, RED_BALLS } from "./constants";
import * as RedBlueBallBase from "../base/red-blue-ball";

export function getProbabilities(drawn: number[] = []): LuckyThreeOptions {
  const OVER_UNDER_RESULT = CombineDrawnBase.getProbabilities(drawn, TOTAL_BALLS, MEDIAN, BALLS_EACH_TURN);
  const RED_BLUE_RESULT = RedBlueBallBase.getProbabilities(drawn, RED_BALLS, TOTAL_BALLS, BALLS_EACH_TURN);

  const result: LuckyThreeOptions = {
    over: OVER_UNDER_RESULT.over,
    under: OVER_UNDER_RESULT.under,

    red2: RED_BLUE_RESULT.red[2],
    red3: RED_BLUE_RESULT.red[3],
    blue2: RED_BLUE_RESULT.blue[2],
    blue3: RED_BLUE_RESULT.blue[3],
  };

  return result;
}
