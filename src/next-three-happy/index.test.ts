import { getOddsSumBall } from "./index";
import { getOddsSumBall as getOddsSumBallOriginal } from "./odds-calculator";
describe("when imported", () => {
  it("should return an object as expected", async () => {
    // Assert
    expect(getOddsSumBall).toStrictEqual(getOddsSumBallOriginal);
  });
});