import { generateConsecutiveNumber } from "./generate-consecutive-number";

describe(generateConsecutiveNumber.name, () => {
  describe("when called with  n = 10", () => {
    it("should return array from 1 -> 10", () => {
      // Act
      const actual = generateConsecutiveNumber(10);

      // Assert
      expect(actual).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });
});
