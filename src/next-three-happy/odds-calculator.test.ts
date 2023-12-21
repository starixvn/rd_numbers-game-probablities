import * as oddsCalculator from "./odds-calculator";

describe(oddsCalculator.getOddsSumBall.name, () => {
  test("With not ball remove zero return 2", () => {
    const expectedResult: oddsCalculator.OU = {
      over: 2,
      under: 2,
    };
    expect(oddsCalculator.getOddsSumBall([])).toStrictEqual(expectedResult);
  });
  test("With invalid remove zero return 2", () => {
    const expectedResult: oddsCalculator.OU = {
      over: 2,
      under: 2,
    };
    expect(oddsCalculator.getOddsSumBall([0, 0, 0])).toStrictEqual(
      expectedResult
    );
  });
  test("With valid input return OU greater than zero", () => {
    const { over, under } = oddsCalculator.getOddsSumBall([1, 50, 9]);
    expect(over).toBeGreaterThan(0);
    expect(under).toBeGreaterThan(0);
  });
});
