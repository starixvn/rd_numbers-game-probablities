import { getProbabilities } from "./get-probabilities";

const RED_BALLS: number[] = [
  2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63,
  66, 67, 70, 71, 74, 75, 78, 79, 82, 83, 86, 87, 90,
];

const TOTAL_BALLS = 90;

describe(getProbabilities.name, () => {
  [
    {
      elements: [],
      ballEachTurn: 3,
      expected: {
        red: [0.12078651685393259, 0.3792134831460674, 0.3792134831460674, 0.12078651685393259],
        blue: [0.12078651685393259, 0.3792134831460674, 0.3792134831460674, 0.12078651685393259],
      },
    },
    {
      elements: [1, 2, 3],
      ballEachTurn: 3,
      expected: {
        red: [0.12494929006085193, 0.38377281947261666, 0.3748478701825558, 0.11643002028397566],
        blue: [0.11643002028397566, 0.3748478701825558, 0.38377281947261666, 0.12494929006085193],
      },
    },
    {
      elements: [],
      ballEachTurn: 4,
      expected: {
        red: [0.058310732274312285, 0.2499031383184812, 0.38357225881441304, 0.2499031383184812, 0.058310732274312285],
        blue: [0.058310732274312285, 0.2499031383184812, 0.38357225881441304, 0.2499031383184812, 0.058310732274312285],
      },
    },
  ].forEach(({ elements, ballEachTurn, expected }) => {
    describe("when called", () => {
      it("should return as expected", () => {
        // Act
        const actual = getProbabilities(elements, RED_BALLS, TOTAL_BALLS, ballEachTurn);

        // Assert
        expect(actual).toStrictEqual(expected);
      });
    });
  });
});
