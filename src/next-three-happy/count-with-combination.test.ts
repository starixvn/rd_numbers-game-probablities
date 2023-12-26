import countWithCombination from "./count-with-combination";

describe(countWithCombination.name, () => {
  describe("when called", () => {
    it("should return number of all combinations and number of combinations is suitable with condition", () => {
      // Arrange
      const array = [1, 2, 3, 4, 5];
      const sizeOfCombination = 3;
      const condition = (item: number[]) => {
        return item.includes(1);
      }
      const expectedResult = {
        numberOfAllCombinations: 10,
        numberOfSuitableCombinations: 6
      }

      // Act
      const actualResult = countWithCombination(array, sizeOfCombination, condition);
      
      // Assert
      expect(actualResult).toEqual(expectedResult);
    })
  })

  describe("when condition is always true", () => {
    it("should return number of combination is equal to number of suitable combination", () => {
      // Arrange
      const array = [1, 2, 3, 4, 5];
      const sizeOfCombination = 3;
      const condition = (_: number[]) => true;

      // Act
      const {numberOfAllCombinations, numberOfSuitableCombinations} = countWithCombination(array, sizeOfCombination, condition);
      
      // Assert
      expect(numberOfAllCombinations).toBe(numberOfSuitableCombinations);
    })
  })
  
  describe("when size of combination greater than size of array", () => {
    it("should return number of combinations is zero and number of suitable combinations is zero", () => {
      // Arrange
      const array = [1, 2, 3];
      const sizeOfCombination = 4;
      const condition = (_: number[]) => true;
      const expectedResult = {
        numberOfAllCombinations: 0,
        numberOfSuitableCombinations: 0
      }

      // Act
      const actualResult = countWithCombination(array, sizeOfCombination, condition);

      // Assert
      expect(actualResult).toEqual(expectedResult);
    })
  })

  describe("when size of combination is zero and condition always true", () => {
    it("should return number of combinations is one and number of suitable combinations is one", () => {
      // Arrange
      const array = [1, 2, 3];
      const sizeOfCombination = 0;
      const condition = (_: number[]) => true;
      const expectedResult = {
        numberOfAllCombinations: 1,
        numberOfSuitableCombinations: 1
      }

      // Act
      const actualResult = countWithCombination(array, sizeOfCombination, condition);

      // Assert
      expect(actualResult).toEqual(expectedResult);
    })
  })

  describe("when size of combination is zero and condition always false", () => {
    it("should return number of combinations is one and number of suitable combinations is zero", () => {
      // Arrange
      const array = [1, 2, 3];
      const sizeOfCombination = 0;
      const condition = (_: number[]) => false;
      const expectedResult = {
        numberOfAllCombinations: 1,
        numberOfSuitableCombinations: 0
      }

      // Act
      const actualResult = countWithCombination(array, sizeOfCombination, condition);

      // Assert
      expect(actualResult).toEqual(expectedResult);
    })
  })
});
