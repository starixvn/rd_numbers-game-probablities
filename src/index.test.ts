import { NextBall } from "./index";
import * as NexBallOriginal from "./next-ball";

describe("when imported", () => {
  it("should return an object as expected", async () => {
    // Assert
    expect(NextBall).toStrictEqual(NexBallOriginal);
  });
});
