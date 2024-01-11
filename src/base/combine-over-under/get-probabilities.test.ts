import { getProbabilities } from "./get-probabilities";
import { OverUnderOptions } from "./types";

const TOTAL_BALLS = 90;
const BALLS_EACH_TURN = 3;
const MEDIAN = 137;

describe(getProbabilities.name, () => {
  describe("When drawn balls is empty", () => {
    it("should return with expected result", () => {
      const drawnBalls: number[] = [];
      const expectedResult: OverUnderOptions = {
        over: 0.5,
        under: 0.5,
      };

      const actualResult = getProbabilities(drawnBalls, TOTAL_BALLS, MEDIAN, BALLS_EACH_TURN);

      expect(actualResult).toStrictEqual(expectedResult);
    });
  });

  describe("when drawn balls is not empty", () => {
    it("should return over is greater than zero and under is greater than zero", () => {
      const drawnBalls: number[] = [34, 23, 12];

      const actualResult = getProbabilities(drawnBalls, TOTAL_BALLS, MEDIAN, BALLS_EACH_TURN);
      expect(actualResult.under).toBeGreaterThan(0);
      expect(actualResult.over).toBeGreaterThan(0);
    });
  });
});
