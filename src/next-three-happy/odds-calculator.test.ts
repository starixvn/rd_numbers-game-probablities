import * as oddsCalculator from "./odds-calculator";
import { NextThreeHappyOptions } from "./types";

describe(oddsCalculator.getOddsSumBall.name, () => {
  describe("When remove balls is empty", () => {
    it("should return over is 2 and under is 2", () => {
      const removedBalls: number[] = [];
      const expectedResult: NextThreeHappyOptions = {
        over: 2,
        under: 2,
      };

      const actualResult = oddsCalculator.getOddsSumBall(removedBalls);

      expect(actualResult).toStrictEqual(expectedResult);
    });
  });

  describe("when remove balls is not empty", () => {
    it("should return over is greather than zero and under is greater than zero", () => {
      const removedBalls: number[] = [34, 23, 12];

      const actualResult = oddsCalculator.getOddsSumBall(removedBalls);

      expect(actualResult.under).toBeGreaterThan(0);
      expect(actualResult.over).toBeGreaterThan(0);
    });
  });
});
