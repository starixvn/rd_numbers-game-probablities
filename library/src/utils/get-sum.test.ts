import { getSum } from "./get-sum";

describe(getSum.name, () => {
  describe("when called", () => {
    it("should return as expected", () => {
      // Act
      const actual = getSum([2, 3, 7, 8]);

      // Assert
      expect(actual).toStrictEqual(20);
    });
  });
});
