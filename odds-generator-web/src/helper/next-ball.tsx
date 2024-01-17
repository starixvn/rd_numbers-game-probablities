import * as Game from "@rd/numbers-game-probabilities";
import { probabilityToDecimalOdd } from "./utils";

export interface NextBallOdds {
  over: number;
  under: number;
  odd: number;
  even: number;
}

export function calculateBetOdds(drawn: number[], margin: number): NextBallOdds {
  const prob = Game.NextBall.getProbabilities(drawn);

  return {
    over: probabilityToDecimalOdd(prob.over, margin),
    under: probabilityToDecimalOdd(prob.under, margin),
    odd: probabilityToDecimalOdd(prob.odd, margin),
    even: probabilityToDecimalOdd(prob.even, margin),
  };
}
