import { ok } from "assert";
import { TOTAL_BALLS } from "./constants";
import type { NumberWarOptions } from "./types";
import { getSum } from "./helper";

export function getOdds(playerDrawn: number[] = [], bankerDrawn: number[] = []): NumberWarOptions {
  ok(bankerDrawn.length === playerDrawn.length);
  ok(TOTAL_BALLS >= playerDrawn.length);

  const playerDrawnSum = getSum(playerDrawn);
  const bankerDrawnSum = getSum(bankerDrawn);
  let tie = 0;
  let playerWin = 0;
  let bankerWin = 0;

  for (let playerNextBall = 1; playerNextBall <= TOTAL_BALLS; playerNextBall++) {
    for (let bankerNextBall = 1; bankerNextBall <= TOTAL_BALLS; bankerNextBall++) {
      if (
        playerDrawn.indexOf(playerNextBall) === -1 &&
        bankerDrawn.indexOf(bankerNextBall) === -1
      ) {
        const playerSumDigit = (playerDrawnSum + playerNextBall) % 10;
        const bankerSumDigit = (bankerDrawnSum + bankerNextBall) % 10;
        if (playerSumDigit === bankerSumDigit) {
          tie += 1;
        } else if (playerSumDigit < bankerSumDigit) {
          bankerWin += 1;
        } else if (playerSumDigit > bankerSumDigit) {
          playerWin += 1;
        }
      }
    }
  }

  const total = tie + playerWin + bankerWin;

  return {
    player: total / playerWin,
    banker: total / bankerWin,
    tie: total / tie,
  };
}
