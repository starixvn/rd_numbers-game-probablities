import { sumGreaterOrEqualThan } from "./sum-greater-or-equal-than";

describe(sumGreaterOrEqualThan.name, () => {
  [
    {
      targetValue: 10,
      elements: [2, 7, 3, 8],
      expected: true,
    },
    {
      targetValue: 21,
      elements: [2, 7, 3, 8],
      expected: false,
    },
  ].forEach(({ targetValue, elements, expected }) => {
    describe("when called", () => {
      it("should return as expected", () => {
        // Act
        const actual = sumGreaterOrEqualThan(targetValue, elements);

        // Assert
        expect(actual).toStrictEqual(expected);
      });
    });
  });
});
