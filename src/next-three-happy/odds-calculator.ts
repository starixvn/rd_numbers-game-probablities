import countWithCombination from "./count-with-combination";
import { NextThreeHappyOptions } from "./types";
import {
  NUMBER_OF_TOTAL_BALLS,
  NUMBER_OF_TAKEN_BALLS,
  TARGET_VALUE,
} from "./constants";

/**
 * Calculates the odds of getting a sum of numbers greater than or equal to a target value
 * from a set of balls, after removing certain balls.
 *
 * @param removedBalls - The balls that have been removed.
 * @param numberOfTotalBalls - The total number of balls.
 * @param numberOfTakenBall - The number of balls that have been taken.
 * @param targetValue - The target value.
 * @returns The odds of getting a sum of numbers greater than or equal to the target value.
 */
export function getOddsSumBall(
  removedBalls: number[],
  numberOfTotalBalls = NUMBER_OF_TOTAL_BALLS,
  numberOfTakenBall = NUMBER_OF_TAKEN_BALLS,
  targetValue = TARGET_VALUE
): NextThreeHappyOptions {
  const balls = new Set<number>();
  for (let i = 1; i <= numberOfTotalBalls; i++) {
    if (!removedBalls.includes(i)) {
      balls.add(i);
    }
  }

  const { numberOfAllCombinations, numberOfSuitableCombinations } =
    countWithCombination([...balls], numberOfTakenBall, (item) =>
      countSumGreatherOrEqualThan(targetValue, item)
    );

  const result: NextThreeHappyOptions = {
    over: numberOfAllCombinations / numberOfSuitableCombinations,
    under:
      numberOfAllCombinations /
      (numberOfAllCombinations - numberOfSuitableCombinations),
  };

  return result;
}

function countSumGreatherOrEqualThan(
  targetValue: number,
  elements: number[]
): boolean {
  const sum = elements.reduce((a, b) => a + b);
  return sum >= targetValue;
}
