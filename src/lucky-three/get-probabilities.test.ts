import { getProbabilities } from "./get-probabilities";
import { LuckyThreeOptions } from "./types";

describe(getProbabilities.name, () => {
  describe("when called with no argument", () => {
    it("should return probabilities for the first drawn", () => {
      const expectedResult: LuckyThreeOptions = {
        over: 0.5,
        under: 0.5,

        red2: 0.3792134831460674,
        red3: 0.12078651685393259,
        blue2: 0.3792134831460674,
        blue3: 0.12078651685393259,
      };

      const actualResult = getProbabilities();

      expect(actualResult).toStrictEqual(expectedResult);
    });
  });

  [
    {
      drawnBalls: [1, 2, 3],
      expected: {
        over: 0.5392046794660126,
        under: 0.4607953205339875,

        red2: 0.3748478701825558,
        red3: 0.11643002028397566,
        blue2: 0.38377281947261666,
        blue3: 0.12494929006085193,
      },
    },
    {
      drawnBalls: [1, 2, 3, 4, 5, 6],
      expected: {
        over: 0.5809159984887284,
        under: 0.41908400151127156,

        red2: 0.37005163511187605,
        red3: 0.11187607573149742,
        blue2: 0.3885542168674699,
        blue3: 0.12951807228915663,
      },
    },
    {
      drawnBalls: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      expected: {
        over: 0.6249882794186592,
        under: 0.37501172058134086,

        red2: 0.3748241912798875,
        red3: 0.11579934364744492,
        blue2: 0.38443506797937177,
        blue3: 0.12494139709329583,
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
});
