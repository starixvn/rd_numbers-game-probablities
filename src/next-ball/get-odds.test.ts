import { AssertionError } from "assert";
import { getOdds } from "./get-odds";
import { NextBallOptions } from "./types";

describe(getOdds.name, () => {
  describe("when called without arguments", () => {
    it("should return odds for the first drawn", () => {
      // Arrange
      const odds: NextBallOptions = {
        odd: 75 / 38,
        over: 75 / 38,
        under: 75 / 37,
        even: 75 / 37,
      };

      // Act
      const actual = getOdds();

      // Assert
      expect(actual).toStrictEqual(odds);
    });
  });

  [
    {
      drawn: 1,
      odds: {
        odd: 74 / 37,
        over: 74 / 38,
        under: 74 / 36,
        even: 74 / 37,
      },
    },
    {
      drawn: 2,
      odds: {
        odd: 74 / 38,
        over: 74 / 38,
        under: 74 / 36,
        even: 74 / 36,
      },
    },
    {
      drawn: 75,
      odds: {
        odd: 74 / 37,
        over: 74 / 37,
        under: 74 / 37,
        even: 74 / 37,
      },
    },
  ].forEach(({ drawn, odds }) => {
    describe(`when the first drawn is ${drawn}`, () => {
      it("should return odds as expected", () => {
        // Act
        const actual = getOdds([drawn]);

        // Assert
        expect(actual).toStrictEqual(odds);
      });
    });
  });
});
