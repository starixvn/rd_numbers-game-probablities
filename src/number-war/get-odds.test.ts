import { NumberWarOptions } from "./types";
import { getOdds } from "./get-odds";

describe(getOdds.name, () => {
  describe("when called without arguments", () => {
    it("should return odds for the first drawn", () => {
      // Arrange
      const odds: NumberWarOptions = {
        player: 5625 / 2530,
        banker: 5625 / 2530,
        tie: 5625 / 565,
      };

      // Act
      const actual = getOdds();

      // Assert
      expect(actual).toStrictEqual(odds);
    });
  });

  [
    {
      playerDrawn: [1],
      bankerDrawn: [6],
      odds: {
        banker: 5476 / 2504,
        player: 5476 / 2426,
        tie: 5476 / 546,
      },
    },
    {
      playerDrawn: [1, 8],
      bankerDrawn: [2, 10],
      odds: {
        banker: 5329 / 2519,
        player: 5329 / 2279,
        tie: 5329 / 531,
      },
    },
    {
      playerDrawn: [3, 18, 45],
      bankerDrawn: [2, 34, 15],
      odds: {
        banker: 5184 / 2298,
        player: 5184 / 2369,
        tie: 5184 / 517,
      },
    },
  ].forEach(({ playerDrawn, bankerDrawn, odds }) => {
    describe(`when the player drawn is ${playerDrawn} and the banker drawn is ${bankerDrawn}`, () => {
      it("should return odds as expected", () => {
        // Act
        const actual = getOdds(playerDrawn, bankerDrawn);

        // Assert
        expect(actual).toStrictEqual(odds);
      });
    });
  });
});
