import { getProbabilities } from "./index";
import { getProbabilities as getProbabilitiesOriginal } from "./get-probabilities";
describe("when imported", () => {
  it("should return an object as expected", async () => {
    expect(getProbabilities).toStrictEqual(getProbabilitiesOriginal);
  });
});
