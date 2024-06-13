export const generateConsecutiveNumber = (N: number) => {
  return [...Array(N + 1).keys()].slice(1);
};
