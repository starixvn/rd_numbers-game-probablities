import { countBalls } from "./count-balls";

const RED_BALLS: number[] = [
  1, 2, 5, 6, 9, 10, 13, 14, 17, 18, 21, 22, 25, 26, 29, 30, 33, 34, 37, 38, 41, 42, 45, 46, 49, 50, 53, 54, 57, 58, 61, 62,
  65, 66, 69, 70, 73, 74, 77, 78, 81, 82, 85, 86, 89, 90,
];

describe(countBalls.name, () => {
  [
    {
      elements: [1, 3, 4, 7, 8],
      expected: { red: 1, blue: 4 },
    },
    {
      elements: [1, 2, 3, 4, 5],
      expected: { red: 3, blue: 2 },
    },
    {
      elements: [1, 2, 3, 4, 5, 6],
      expected: { red: 4, blue: 2 },
    },
  ].forEach(({ elements, expected }) => {
    describe("when called", () => {
      it("should return as expected", () => {
        // Act
        const actual = countBalls(elements, RED_BALLS);

        // Assert
        expect(actual).toStrictEqual(expected);
      });
    });
  });
});
