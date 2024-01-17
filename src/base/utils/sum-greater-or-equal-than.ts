import { getSum } from "./get-sum";

export function sumGreaterOrEqualThan(targetValue: number, elements: number[]): boolean {
  return getSum(elements) >= targetValue;
}
