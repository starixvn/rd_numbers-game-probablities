import { countCombinationWithCondition, sumGreaterOrEqualThan } from "../utils";
import { OverUnderOptions } from "./types";

/**
 * Calculates the probabilities of getting a sum of numbers greater than or equal to a target value (median)
 * from a set of balls, after drawn certain balls.
 *
 * @param drawn - The drawn balls.
 * @param totalBalls - The total number of balls.
 * @param median - The median value for calculate the sum of drawn balls is over or under.
 * @param ballEachTurn - The number of balls are drawn in each turn.
 * @returns The probabilities of over/under for sum drawn balls.
 */

export function getProbabilities(
  drawn: number[],
  totalBalls: number,
  median: number,
  ballEachTurn: number
): OverUnderOptions {
  const balls = new Set<number>();
  for (let i = 1; i <= totalBalls; i++) {
    if (!drawn.includes(i)) {
      balls.add(i);
    }
  }

  const { satisfied, dissatisfied } = countCombinationWithCondition([...balls], ballEachTurn, (item) =>
    sumGreaterOrEqualThan(median, item)
  );

  const numberOfAllCombinations = satisfied + dissatisfied;

  const result: OverUnderOptions = {
    over: satisfied / numberOfAllCombinations,
    under: dissatisfied / numberOfAllCombinations,
  };

  return result;
}
