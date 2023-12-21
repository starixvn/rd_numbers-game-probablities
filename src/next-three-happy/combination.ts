export default function countWithCombination<T>(
  array: T[],
  n: number,
  condition: (item: T[]) => boolean
): number {
  const { isSpecialCase, value } = checkSpecialCase(array, n, condition);
  if (isSpecialCase) {
    return value;
  }
  let maxDict = new Map<number, number>();
  let indexArr = [];
  for (let i = 0; i < n; i++) {
    maxDict.set(i, array.length - n + i);
    indexArr.push(i);
  }
  let index = n - 1;
  let result = 0;
  let flag = false;
  while (true) {
    let temp: T[] = indexArr.map((i) => array[i]);
    if (condition(temp)) {
      result++;
    }
    indexArr[index]++;
    if (indexArr[index] > (maxDict.get(index) ?? -1)) {
      ({ index, flag } = findValidPosition(indexArr, index, maxDict, flag));
      if (flag) {
        return result;
      }
      indexArr[index]++;
      for (let i = index + 1; i < n; i++) {
        indexArr[i] = indexArr[i - 1] + 1;
      }
      index = n - 1;
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
  n: number,
  condition: (item: T[]) => boolean
): { isSpecialCase: boolean; value: number } {
  if (n > array.length || n < 0) return { isSpecialCase: true, value: 0 };
  if (n === 0) return { isSpecialCase: true, value: condition([]) ? 1 : 0 };

  return { isSpecialCase: false, value: 0 };
}
