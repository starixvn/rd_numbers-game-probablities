import { getProbabilities } from "./get-probabilities";
import { OverUnderOptions } from "./types";

const TOTAL_BALLS = 90;
const BALLS_EACH_TURN = 3;
const MEDIAN = 137;

describe(getProbabilities.name, () => {
  describe("When remove balls is empty", () => {
    it("should return with expected result", () => {
      const removedBalls: number[] = [];
      const expectedResult: OverUnderOptions = {
        over: 0.5,
        under: 0.5,
      };

      const actualResult = getProbabilities(removedBalls, TOTAL_BALLS, MEDIAN, BALLS_EACH_TURN);

      expect(actualResult).toStrictEqual(expectedResult);
    });
  });

  describe("when remove balls is not empty", () => {
    it("should return over is greater than zero and under is greater than zero", () => {
      const removedBalls: number[] = [34, 23, 12];

      const actualResult = getProbabilities(removedBalls, TOTAL_BALLS, MEDIAN, BALLS_EACH_TURN);
      expect(actualResult.under).toBeGreaterThan(0);
      expect(actualResult.over).toBeGreaterThan(0);
    });
  });
});
