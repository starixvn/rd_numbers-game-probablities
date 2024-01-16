import { countBy } from "./count-by";

const isEven = (ball: number) => ball % 2 === 0;

describe(countBy.length, () => {
  describe("when the balls is empty", () => {
    it("should return [0, 0]", () => {
      // Act
      const actual = countBy(isEven, []);

      // Assert
      expect(actual).toStrictEqual([0, 0]);
    });
  });

  describe("when the called", () => {
    it("should return [1, 1]", () => {
      // Act
      const actual = countBy(isEven, [1, 2]);

      // Assert
      expect(actual).toStrictEqual([1, 1]);
    });
  });
});
