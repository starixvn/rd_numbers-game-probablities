import { WELCOME } from "./index";

describe("when imported", () => {
  it("should return an object as expected", async () => {
    // Assert
    expect(WELCOME).toStrictEqual("Hello");
  });
});
