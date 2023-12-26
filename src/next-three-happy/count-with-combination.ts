/**
 * Counts the number of all combinations and the number of suitable combinations
 * that meet a given condition.
 *
 * @param array - The input array.
 * @param sizeOfCombination - The size of each combination.
 * @param condition - The condition function to apply to each combination.
 * @return {{numberOfAllCombinations, numberOfSuitableCombinations}} - An object
 * containing the number of all combinations and the number of suitable combinations.
 */
export default function countWithCombination<T>(
  array: T[],
  sizeOfCombination: number,
  condition: (item: T[]) => boolean
): { numberOfAllCombinations: number; numberOfSuitableCombinations: number } {
  const { isSpecialCase, value } = checkSpecialCase(
    array,
    sizeOfCombination,
    condition
  );
  if (isSpecialCase) {
    return value;
  }
  const maxIndexDict = new Map<number, number>();
  const indexArr = [];
  for (let i = 0; i < sizeOfCombination; i++) {
    maxIndexDict.set(i, array.length - sizeOfCombination + i);
    indexArr.push(i);
  }
  let index = sizeOfCombination - 1;
  let countAllCombinations = 0;
  let countSuitableCombinations = 0;
  let flag = false;

  while (true) {
    const temp: T[] = indexArr.map((i) => array[i]);
    countAllCombinations++;
    if (condition(temp)) {
      countSuitableCombinations++;
    }
    indexArr[index]++;
    if (indexArr[index] > (maxIndexDict.get(index) ?? -1)) {
      ({ index, flag } = findValidPosition(
        indexArr,
        index,
        maxIndexDict,
        flag
      ));
      if (flag) {
        return {
          numberOfAllCombinations: countAllCombinations,
          numberOfSuitableCombinations: countSuitableCombinations,
        };
      }
      indexArr[index]++;
      for (let i = index + 1; i < sizeOfCombination; i++) {
        indexArr[i] = indexArr[i - 1] + 1;
      }
      index = sizeOfCombination - 1;
    }
  }
}

function findValidPosition(
  indexArr: number[],
  index: number,
  maxDict: Map<number, number>,
  flag: boolean
) {
  while (indexArr[index] >= (maxDict.get(index) ?? -1)) {
    index--;
    if (index < 0) {
      flag = true;
      break;
    }
  }
  return { index, flag };
}

function checkSpecialCase<T>(
  array: T[],
  sizeOfCombination: number,
  condition: (item: T[]) => boolean
): {
  isSpecialCase: boolean;
  value: {
    numberOfAllCombinations: number;
    numberOfSuitableCombinations: number;
  };
} {
  if (sizeOfCombination > array.length || sizeOfCombination < 0) {
    return {
      isSpecialCase: true,
      value: { numberOfAllCombinations: 0, numberOfSuitableCombinations: 0 },
    };
  }
  if (sizeOfCombination === 0) {
    return {
      isSpecialCase: true,
      value: {
        numberOfAllCombinations: 1,
        numberOfSuitableCombinations: condition([]) ? 1 : 0,
      },
    };
  }

  return {
    isSpecialCase: false,
    value: { numberOfAllCombinations: 0, numberOfSuitableCombinations: 0 },
  };
}
