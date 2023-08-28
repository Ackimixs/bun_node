export const createRandomArray = (
  length: number,
  n: number = 10000
): number[] => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * n));
  }
  return arr;
};

export const isSorted = (arr: number[]) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};
