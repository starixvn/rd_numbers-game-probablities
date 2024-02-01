import * as Game from "@rd/numbers-game-probabilities";
import { probabilityToDecimalOdd } from "./utils";

export interface BacBallOdds {
  player: number;
  banker: number;
  tie: number;
}

export function calculateBetOdds(playerDrawn: number[], bankerDrawn: number[], margin: number): BacBallOdds {
  const prob = Game.NumberWar.getProbabilities(playerDrawn, bankerDrawn);

  return {
    player: probabilityToDecimalOdd(prob.player, margin),
    banker: probabilityToDecimalOdd(prob.banker, margin),
    tie: probabilityToDecimalOdd(prob.tie, margin),
  };
}
