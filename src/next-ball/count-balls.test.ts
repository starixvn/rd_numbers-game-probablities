import { OVER_OR_ODD } from "./constants";
import { countBalls } from "./count-balls";

describe(countBalls.name, () => {
  describe("when called with empty balls", () => {
    it("should return an object with properties are 0", () => {
      // Act
      const actual = countBalls([], 38);

      // Assert
      expect(actual).toStrictEqual({ odd: 0, even: 0, over: 0, under: 0 });
    });
  });

  describe("when called", () => {
    it("should return as expected", () => {
      // Act
      const actual = countBalls([1, 38], OVER_OR_ODD);

      // Assert
      expect(actual).toStrictEqual({ odd: 1, even: 1, over: 1, under: 1 });
    });
  });
});
