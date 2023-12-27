import { countCombinationWithCondition } from "./count-combination-with-condition";

describe(countCombinationWithCondition.name, () => {
  describe("when called", () => {
    it("should return number of satisfied and dissatisfied is suitable with condition", () => {
      const array = [1, 2, 3, 4, 5];
      const sizeOfCombination = 3;
      const condition = (item: number[]) => {
        return item.includes(1);
      }
      const expectedResult = {
        satisfied: 6,
        dissatisfied: 4
      }

      const actualResult = countCombinationWithCondition(array, sizeOfCombination, condition);

      expect(actualResult).toEqual(expectedResult);
    })
  })

  describe("when condition is always true", () => {
    it("should return number of dissatisfied is zero and number of satisfied is number of all combinations", () => {
      const array = [1, 2, 3, 4, 5];
      const sizeOfCombination = 3;
      const condition = (_: number[]) => true;

      const {satisfied, dissatisfied} = countCombinationWithCondition(array, sizeOfCombination, condition);
      
      expect(dissatisfied).toBe(0);
      expect(satisfied).toBe(10);
    })
  })

  describe("when condition is always false", () => {
    it("should return number of satisfied is zero and number of dissatisfied is number of all combinations", () => {
      const array = [1, 2, 3, 4, 5, 6];
      const sizeOfCombination = 3;
      const condition = (_: number[]) => false;

      const {satisfied, dissatisfied} = countCombinationWithCondition(array, sizeOfCombination, condition);
      
      expect(satisfied).toBe(0);
      expect(dissatisfied).toBe(20);
    })
  })
  
  describe("when size of combination greater than size of array", () => {
    it("should return number of satisfied and dissatisfied combinations is zero", () => {
      const array = [1, 2, 3];
      const sizeOfCombination = 4;
      const condition = (_: number[]) => true;
      const expectedResult = {
        satisfied: 0,
        dissatisfied: 0
      }

      const actualResult = countCombinationWithCondition(array, sizeOfCombination, condition);

      expect(actualResult).toEqual(expectedResult);
    })
  })
});