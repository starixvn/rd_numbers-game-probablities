import { getProbabilitiesRange } from "./get-probabilities-range";

describe(getProbabilitiesRange.name, () => {
  describe("when called with numberOfTurns = 3", () => {
    it("should return range as expected", () => {
      // Arrange
      const expectedRange = {
        min: {
          over: 0.3742138364779874,
          under: 0.3742138364779874,
          red2: 0.33381712626995647,
          red3: 0.08159974197710047,
          blue2: 0.33381712626995647,
          blue3: 0.08159974197710047,
        },
        max: {
          over: 0.6257861635220126,
          under: 0.6257861635220126,
          red2: 0.420899854862119,
          red3: 0.16368327689082407,
          blue2: 0.420899854862119,
          blue3: 0.16368327689082407,
        },
      };

      // Act
      const actual = getProbabilitiesRange(3);

      // Assert
      expect(actual).toStrictEqual(expectedRange);
    });
  });

  describe("when called with no argument", () => {
    it("should return range as expected", () => {
      // Arrange
      const expectedRange = {
        min: {
          over: 0.3742138364779874,
          under: 0.3742138364779874,
          red2: 0.33381712626995647,
          red3: 0.08159974197710047,
          blue2: 0.33381712626995647,
          blue3: 0.08159974197710047,
        },
        max: {
          over: 0.6257861635220126,
          under: 0.6257861635220126,
          red2: 0.420899854862119,
          red3: 0.16368327689082407,
          blue2: 0.420899854862119,
          blue3: 0.16368327689082407,
        },
      };

      // Act
      const actual = getProbabilitiesRange();

      // Assert
      expect(actual).toStrictEqual(expectedRange);
    });
  });

  describe("Snapshot test", () => {
    it("should match snapshot", () => {
      // Act
      const actual = getProbabilitiesRange();

      // Assert
      expect(actual).toMatchSnapshot();
    });
  });
});
