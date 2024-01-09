import { ok } from "assert";
import { TOTAL_BALLS } from "./constants";
import type { NumberWarOptions } from "./types";

export function getProbabilities(playerDrawn: number[] = [], bankerDrawn: number[] = []): NumberWarOptions {
  ok(bankerDrawn.length === playerDrawn.length, Error("player drawn balls and banker drawn balls must be the same length"));
  ok(TOTAL_BALLS >= playerDrawn.length);

  let tie = 0;
  let playerWin = 0;
  let bankerWin = 0;

  for (let playerNextBall = 1; playerNextBall <= TOTAL_BALLS; playerNextBall++) {
    for (let bankerNextBall = 1; bankerNextBall <= TOTAL_BALLS; bankerNextBall++) {
      if (playerDrawn.indexOf(playerNextBall) === -1 && bankerDrawn.indexOf(bankerNextBall) === -1) {
        if (playerNextBall === bankerNextBall) {
          tie += 1;
        } else if (playerNextBall < bankerNextBall) {
          bankerWin += 1;
        } else if (playerNextBall > bankerNextBall) {
          playerWin += 1;
        }
      }
    }
  }

  const total = tie + playerWin + bankerWin;

  return {
    player: playerWin / total,
    banker: bankerWin / total,
    tie: tie / total,
  };
}
