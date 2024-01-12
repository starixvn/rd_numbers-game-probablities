import { getProbabilities } from "./get-probabilities";
import { NextThreeHappyOptions } from "./types";

describe(getProbabilities.name, () => {
  describe("When drawn balls is empty", () => {
    it("should return over is 2 and under is 2", () => {
      const drawnBalls: number[] = [];
      const expectedResult: NextThreeHappyOptions = {
        over: 0.5,
        under: 0.5,
      };

      const actualResult = getProbabilities(drawnBalls);

      expect(actualResult).toStrictEqual(expectedResult);
    });
  });

  describe("when drawn balls is not empty", () => {
    it("should return over is greater than zero and under is greater than zero", () => {
      const drawnBalls: number[] = [34, 23, 12];

      const actualResult = getProbabilities(drawnBalls);

      expect(actualResult.under).toBeGreaterThan(0);
      expect(actualResult.over).toBeGreaterThan(0);
    });
  });
});
