import { countCombinationWithCondition, getSum } from "../utils";
import { NextThreeHappyOptions } from "./types";
import {
  TOTAL_BALLS as TOTAL_BALLS,
  BALLS_EACH_TURN,
  MEDIAN,
} from "./constants";

/**
 * Calculates the odds of getting a sum of numbers greater than or equal to 137
 * from a set of balls, after removing certain balls.
 *
 * @param drawn - The balls that have been drawn.
 * @returns The odds of getting a sum of numbers greater than or equal to the target value.
 */
export function getOdds(
  drawn: number[]
): NextThreeHappyOptions {
  const balls = new Set<number>();
  for (let i = 1; i <= TOTAL_BALLS; i++) {
    if (!drawn.includes(i)) {
      balls.add(i);
    }
  }

  const { satisfied, dissatisfied } = countCombinationWithCondition(
    [...balls],
    BALLS_EACH_TURN,
    (item) => countSumGreaterOrEqualThan(MEDIAN, item)
  );

  const numberOfAllCombinations = satisfied + dissatisfied;

  const result: NextThreeHappyOptions = {
    over: numberOfAllCombinations / satisfied,
    under: numberOfAllCombinations / dissatisfied,
  };

  return result;
}

function countSumGreaterOrEqualThan(
  targetValue: number,
  elements: number[]
): boolean {
  return getSum(elements) >= targetValue;
}
