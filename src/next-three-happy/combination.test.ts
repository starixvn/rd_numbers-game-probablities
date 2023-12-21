import countWithCombination from "./countWithCombination";

describe(countWithCombination.name, () => {
  test("With empty array return zero", () => {
    expect(countWithCombination(["a", "b", "c"], 4, () => true)).toBe(0);
  });
  test("With size of combine greater than size of array return zero", () => {
    expect(countWithCombination([], 3, () => true)).toBe(0);
  });
  test("With size of combine zero and condition true return one", () => {
    expect(countWithCombination([2, 3, 4], 0, () => true)).toBe(1);
  });
  test("With size of combine zero and condition false return zero", () => {
    expect(countWithCombination([2, 3, 4], 0, () => false)).toBe(0);
  });
  test("With size of combine equal size of array return zero", () => {
    expect(countWithCombination([2, 3, 4], 3, () => true)).toBe(1);
  });
  test("With always true condition return the number of combination", () => {
    expect(countWithCombination(["a", "b", "c", "d", "e"], 3, () => true)).toBe(
      10
    );
  });
  test("With condition return the number of suitable combination", () => {
    expect(
      countWithCombination(["a", "b", "c", "d", "e"], 3, (item) => {
        return [item[0], item[1], item[2]].includes("a");
      })
    ).toBe(6);
  });
});
