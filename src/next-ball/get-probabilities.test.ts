import { getProbabilities } from "./get-probabilities";
import { NextBallOptions } from "./types";
import testCases from "./next-ball-test-cases.json";

describe(getProbabilities.name, () => {
  describe("when called without arguments", () => {
    it("should return probabilities for the first drawn", () => {
      // Arrange
      const probabilities: NextBallOptions = {
        odd: 38 / 75,
        over: 38 / 75,
        under: 37 / 75,
        even: 37 / 75,
      };

      // Act
      const actual = getProbabilities();

      // Assert
      expect(actual).toStrictEqual(probabilities);
    });
  });

  [
    {
      drawn: 1,
      probabilities: {
        odd: 37 / 74,
        over: 38 / 74,
        under: 36 / 74,
        even: 37 / 74,
      },
    },
    {
      drawn: 2,
      probabilities: {
        odd: 38 / 74,
        over: 38 / 74,
        under: 36 / 74,
        even: 36 / 74,
      },
    },
    {
      drawn: 75,
      probabilities: {
        odd: 37 / 74,
        over: 37 / 74,
        under: 37 / 74,
        even: 37 / 74,
      },
    },
  ].forEach(({ drawn, probabilities }) => {
    describe(`when the first drawn is ${drawn}`, () => {
      it("should return probabilities as expected", () => {
        // Act
        const actual = getProbabilities([drawn]);

        // Assert
        expect(actual).toStrictEqual(probabilities);
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
});
