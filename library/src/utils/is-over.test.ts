import { isOver } from "./is-over";

describe(isOver.name, () => {
  describe("when the ball is greater than factor", () => {
    it("should return true", () => {
      // Act
      const actual = isOver(4)(5);

      // Assert
      expect(actual).toBeTruthy();
    });
  });

  describe("when the ball equals factor", () => {
    it("should return true", () => {
      // Act
      const actual = isOver(4)(4);

      // Assert
      expect(actual).toBeTruthy();
    });
  });

  describe("when the ball is less than factor", () => {
    it("should return false", () => {
      // Act
      const actual = isOver(4)(3);

      // Assert
      expect(actual).toBeFalsy();
    });
  });
});
