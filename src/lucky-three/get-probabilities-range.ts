import { generateConsecutiveNumber } from "../base/utils";
import { BALLS_EACH_TURN, NUMBER_OF_TURNS, RED_BALLS } from "./constants";
import { getProbabilities } from "./get-probabilities";
import { LuckyThreeOptions, LuckyThreeProbabilitiesRange } from "./types";

export function getProbabilitiesRange(numberOfTurns: number = NUMBER_OF_TURNS): LuckyThreeProbabilitiesRange {
  const drawnBallsForRange = (numberOfTurns - 1) * BALLS_EACH_TURN;
  const underMinOverMaxDrawn = generateConsecutiveNumber(drawnBallsForRange);
  const redMinBlueMaxDrawn = RED_BALLS.slice(0, drawnBallsForRange);

  const underMinOverMaxProbabilities = getProbabilities(underMinOverMaxDrawn);
  const redMinBlueMaxProbabilities = getProbabilities(redMinBlueMaxDrawn);

  const minProb: LuckyThreeOptions = {
    over: underMinOverMaxProbabilities.under,
    under: underMinOverMaxProbabilities.under,

    red2: redMinBlueMaxProbabilities.red2,
    red3: redMinBlueMaxProbabilities.red3,
    blue2: redMinBlueMaxProbabilities.red2,
    blue3: redMinBlueMaxProbabilities.red3,
  };

  const maxProb: LuckyThreeOptions = {
    over: underMinOverMaxProbabilities.over,
    under: underMinOverMaxProbabilities.over,

    red2: redMinBlueMaxProbabilities.blue2,
    red3: redMinBlueMaxProbabilities.blue3,
    blue2: redMinBlueMaxProbabilities.blue2,
    blue3: redMinBlueMaxProbabilities.blue3,
  };

  return {
    min: minProb,
    max: maxProb,
  };
}
