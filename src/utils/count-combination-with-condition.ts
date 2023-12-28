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
  const initState = {
    data,
    start: 0,
    end: collection.length - 1,
    index: 0,
    count,
  };
  const fixedValueElements = {
    collection,
    combinationSize,
    condition,
  };
  calculateCombination(fixedValueElements, initState);

  return count;
}

function calculateCombination(
  fixedValueElements: {
    collection: number[];
    combinationSize: number;
    condition: (combination: number[]) => boolean;
  },
  state: {
    data: number[];
    start: number;
    end: number;
    index: number;
    count: { satisfied: number; dissatisfied: number };
  }
) {
  if (state.index === fixedValueElements.combinationSize) {
    if (fixedValueElements.condition(state.data)) {
      state.count.satisfied++;
    } else {
      state.count.dissatisfied++;
    }

    return;
  }

  for (
    let i = state.start;
    i <= state.end &&
    state.end - i + 1 >= fixedValueElements.combinationSize - state.index;
    i++
  ) {
    state.data[state.index] = fixedValueElements.collection[i];

    const newState = {
      ...state,
      start: i + 1,
      index: state.index + 1,
    };
    calculateCombination(fixedValueElements, newState);
  }
}
