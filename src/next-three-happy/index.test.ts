import { getOddsSumBall } from "./index";
import { getOddsSumBall as getOddsSumBallOriginal } from "./get-odds";
describe("when imported", () => {
  it("should return an object as expected", async () => {
    expect(getOddsSumBall).toStrictEqual(getOddsSumBallOriginal);
  });
});
