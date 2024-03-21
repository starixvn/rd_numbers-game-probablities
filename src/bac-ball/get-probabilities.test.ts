import { BacBallOptions } from "./types";
import { getProbabilities } from "./get-probabilities";

describe(getProbabilities.name, () => {
  describe("when called with number of player drawn balls banker different banker drawn balls", () => {
    it("should return error", () => {
      try {
        getProbabilities([], [1]);
      } catch (err: any) {
        expect(err.message).toEqual("Error: player drawn balls and banker drawn balls must be the same length");
      }
    });
  });

  describe("when called without arguments", () => {
    it("should return probabilities for the first drawn", () => {
      // Arrange
      const odds: BacBallOptions = {
        player: 29 / 60,
        banker: 29 / 60,
        tie: 1 / 30,
      };

      // Act
      const actual = getProbabilities();

      // Assert
      expect(actual).toStrictEqual(odds);
    });
  });

  [
    {
      playerDrawn: [1],
      bankerDrawn: [6],
      odds: {
        banker: 402 / 841,
        player: 411 / 841,
        tie: 28 / 841,
      },
    },
    {
      playerDrawn: [4, 8],
      bankerDrawn: [2, 10],
      odds: {
        banker: 379 / 784,
        player: 379 / 784,
        tie: 26 / 784,
      },
    },
    {
      playerDrawn: [3, 18, 15],
      bankerDrawn: [2, 14, 15],
      odds: {
        banker: 355 / 729,
        player: 349 / 729,
        tie: 25 / 729,
      },
    },
  ].forEach(({ playerDrawn, bankerDrawn, odds }) => {
    describe(`when the player drawn is ${playerDrawn} and the banker drawn is ${bankerDrawn}`, () => {
      it("should return probabilities as expected", () => {
        // Act
        const actual = getProbabilities(playerDrawn, bankerDrawn);

        // Assert
        expect(actual).toStrictEqual(odds);
      });
    });
  });
});
