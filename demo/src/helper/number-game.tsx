import * as Game from "@rd/numbers-game-probabilities";

export interface NumberWarOdds {
  player: number;
  banker: number;
  tie: number;
}

const probabilityToDecimalOdd = (prob: number, margin: number): number => {
  return (1 - margin) / prob;
};

export function calculateBetOdds(playerDrawn: number[], bankerDrawn: number[], margin: number): NumberWarOdds {
  const prob = Game.NumberWar.getProbabilities(playerDrawn, bankerDrawn);

  return {
    player: probabilityToDecimalOdd(prob.player, margin),
    banker: probabilityToDecimalOdd(prob.banker, margin),
    tie: probabilityToDecimalOdd(prob.tie, margin),
  };
}
