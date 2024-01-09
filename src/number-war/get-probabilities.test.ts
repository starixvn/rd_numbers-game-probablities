import { NumberWarOptions } from "./types";
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
      const odds: NumberWarOptions = {
        player: 37 / 75,
        banker: 37 / 75,
        tie: 1 / 75,
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
        banker: 2697 / 5476,
        player: 2706 / 5476,
        tie: 73 / 5476,
      },
    },
    {
      playerDrawn: [4, 8],
      bankerDrawn: [2, 10],
      odds: {
        banker: 2629 / 5329,
        player: 2629 / 5329,
        tie: 71 / 5329,
      },
    },
    {
      playerDrawn: [3, 18, 45],
      bankerDrawn: [2, 34, 15],
      odds: {
        banker: 2571 / 5184,
        player: 2544 / 5184,
        tie: 69 / 5184,
      },
    },
  ].forEach(({ playerDrawn, bankerDrawn, odds }) => {
    describe(`when the player drawn is ${playerDrawn} and the banker drawn is ${bankerDrawn}`, () => {
      it("should return odds as expected", () => {
        // Act
        const actual = getProbabilities(playerDrawn, bankerDrawn);

        // Assert
        expect(actual).toStrictEqual(odds);
      });
    });
  });
});
