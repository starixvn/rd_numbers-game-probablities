export const probabilityToDecimalOdd = (prob: number, margin: number): number => {
  return (1 - margin) / prob;
};
