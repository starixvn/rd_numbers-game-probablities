import { RedBlueProbabilities } from "./types";
import { countBalls } from "./count-balls";
import { combinations } from "mathjs";

/**
 * Calculates the probabilities of getting a sum of numbers greater than or equal to a target value (median)
 * from a set of balls, after drawn certain balls.
 *
 * @param drawn - The drawn balls.
 * @param totalBalls - The total number of balls.
 * @param redBalls - The red balls.
 * @param ballEachTurn - The number of balls are drawn in each turn.
 * @returns The probabilities of number of red balls for next turn. Example:
 * red: [0.12078651685393259, 0.3792134831460674, 0.3792134831460674, 0.12078651685393259] means that
 * red[0] = 0.12078651685393259 is the probability of 0 red ball in next turn
 * red[1] = 0.3792134831460674 is the probability of 1 red ball in next turn
 * red[2] = 0.3792134831460674 is the probability of 2 red balls in next turn
 * red[3] = 0.12078651685393259 is the probability of 3 red balls in next turn
 * Similar to blue.
 */

export function getProbabilities(
  drawn: number[],
  redBalls: number[],
  totalBalls: number,
  ballsEachTurn: number
): RedBlueProbabilities {
  const drawnCount = countBalls(drawn, redBalls);

  const ballRemains = totalBalls - drawn.length;
  const redRemains = redBalls.length - drawnCount.red;
  const blueRemains = ballRemains - redRemains;
  console.log(redRemains, blueRemains);

  let red: number[] = [];
  let blue: number[] = [];

  for (let numberOfRedInNextTurn = 0; numberOfRedInNextTurn <= ballsEachTurn; numberOfRedInNextTurn++) {
    const numberOfBlueInNextTurn = ballsEachTurn - numberOfRedInNextTurn;
    red[numberOfRedInNextTurn] =
      (combinations(redRemains, numberOfRedInNextTurn) * combinations(blueRemains, numberOfBlueInNextTurn)) /
      combinations(ballRemains, ballsEachTurn);
    blue[numberOfBlueInNextTurn] = red[numberOfRedInNextTurn];
  }

  return {
    red,
    blue,
  };
}
