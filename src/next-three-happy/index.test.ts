import { getOdds } from "./index";
import { getOdds as getOddsOriginal } from "./get-odds";
describe("when imported", () => {
  it("should return an object as expected", async () => {
    expect(getOdds).toStrictEqual(getOddsOriginal);
  });
});
