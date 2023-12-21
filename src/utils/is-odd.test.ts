import { isOdd } from "./is-odd";

describe(isOdd.name, () => {
  describe("when the input is odd", () => {
    it("should return true", () => {
      // Act
      const actual = isOdd(1);

      // Assert
      expect(actual).toBeTruthy();
    });
  });

  describe("when the input is even", () => {
    it("should return false", () => {
      // Act
      const actual = isOdd(2);

      // Assert
      expect(actual).toBeFalsy();
    });
  });
});
