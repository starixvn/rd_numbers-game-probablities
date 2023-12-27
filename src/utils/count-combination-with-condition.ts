/**
 * Counts the number of combinations based on a given condition.
 *
 * @param collection - The collection of numbers to generate combinations from.
 * @param combinationSize - The size of the combinations to generate.
 * @param condition - The condition function to check if a combination satisfies the condition.
 * @return {{ satisfied; dissatisfied }} - An object containing the count of combinations 
 * that satisfy and do not satisfy the condition.
 */
export function countCombinationWithCondition(
  collection: number[],
  combinationSize: number,
  condition: (combination: number[]) => boolean
): { satisfied: number; dissatisfied: number } {
  const data = new Array(combinationSize);
  const count = {
    satisfied: 0,
    dissatisfied: 0,
  };
  combinationUtil(
    { collection, combinationSize, condition },
    data,
    0,
    collection.length - 1,
    0,
    count
  );

  return count;
}

function combinationUtil(
  fixedValueElements: {
    collection: number[];
    combinationSize: number;
    condition: (combination: number[]) => boolean;
  },
  data: number[],
  start: number,
  end: number,
  index: number,
  count: { satisfied: number; dissatisfied: number }
) {
  if (index === fixedValueElements.combinationSize) {
    if (fixedValueElements.condition(data)) {
      count.satisfied++;
    } else {
      count.dissatisfied++;
    }

    return;
  }

  for (
    let i = start;
    i <= end && end - i + 1 >= fixedValueElements.combinationSize - index;
    i++
  ) {
    data[index] = fixedValueElements.collection[i];
    combinationUtil(fixedValueElements, data, i + 1, end, index + 1, count);
  }
}
