import { getProbabilities } from "./get-probabilities";
import { LuckyThreeOptions } from "./types";
import testCases from "./luckythree-60-test-cases.json";

describe(getProbabilities.name, () => {
  describe("when called with no argument", () => {
    it("should return probabilities for the first drawn", () => {
      const expectedResult: LuckyThreeOptions = {
        over: 0.5,
        under: 0.5,

        red2: 0.3813559322033898,
        red3: 0.11864406779661017,
        blue2: 0.3813559322033898,
        blue3: 0.11864406779661017,
      };

      const actualResult = getProbabilities();

      expect(actualResult).toStrictEqual(expectedResult);
    });
  });

  [
    {
      drawnBalls: [1, 2, 3],
      expected: {
        over: 0.5601161995898838,
        under: 0.4398838004101162,

        red2: 0.38851674641148326,
        red3: 0.12488038277511962,
        blue2: 0.37464114832535883,
        blue3: 0.11196172248803828,
      },
    },
    {
      drawnBalls: [1, 2, 3, 4, 5, 6],
      expected: {
        over: 0.6257861635220126,
        under: 0.3742138364779874,

        red2: 0.38207547169811323,
        red3: 0.1179245283018868,
        blue2: 0.38207547169811323,
        blue3: 0.1179245283018868,
      },
    },
    {
      drawnBalls: [2, 4, 6, 8, 10, 12],
      expected: {
        over: 0.6107885824866957,
        under: 0.3892114175133043,

        red2: 0.33381712626995647,
        red3: 0.08159974197710047,
        blue2: 0.420899854862119,
        blue3: 0.16368327689082407,
      },
    },
  ].forEach(({ drawnBalls, expected }) => {
    describe("when called with argument", () => {
      it("should return probabilities for the next drawn", () => {
        const actualResult = getProbabilities(drawnBalls);

        expect(actualResult).toStrictEqual(expected);
      });
    });
  });

  describe("Snapshot test", () => {
    it.each(testCases)("should match snapshot", ({ balls }) => {
      // Act
      const actual = getProbabilities(balls);

      // Assert
      expect(actual).toMatchSnapshot();
    });
  });
});
