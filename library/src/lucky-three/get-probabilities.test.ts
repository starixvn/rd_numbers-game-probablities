import { getProbabilities } from "./get-probabilities";
import { LuckyThreeOptions } from "./types";

describe(getProbabilities.name, () => {
  describe("when called with no argument", () => {
    it("should return probabilities for the first drawn", () => {
      const expectedResult: LuckyThreeOptions = {
        over: 0.5,
        under: 0.5,

        red2: 0.379746835443038,
        red3: 0.12025316455696203,
        blue2: 0.379746835443038,
        blue3: 0.12025316455696203,
      };

      const actualResult = getProbabilities();

      expect(actualResult).toStrictEqual(expectedResult);
    });
  });

  [
    {
      drawnBalls: [1, 2, 3],
      expected: {
        over: 0.5443472317156528,
        under: 0.45565276828434725,

        red2: 0.3748051948051948,
        red3: 0.11532467532467533,
        blue2: 0.3849350649350649,
        blue3: 0.12493506493506494,
      },
    },
    {
      drawnBalls: [1, 2, 3, 4, 5, 6],
      expected: {
        over: 0.591864124398371,
        under: 0.408135875601629,

        red2: 0.3693076638282118,
        red3: 0.11014439096630878,
        blue2: 0.3904109589041096,
        blue3: 0.13013698630136986,
      },
    },
    {
      drawnBalls: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      expected: {
        over: 0.6422885136908407,
        under: 0.3577114863091593,

        red2: 0.3747703612982241,
        red3: 0.11451316595223515,
        blue2: 0.385793018983466,
        blue3: 0.12492345376607471,
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
