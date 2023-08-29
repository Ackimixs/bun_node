export const createRandomArray = (
  length: number,
  n: number = 10_000
): number[] => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * n));
  }
  return arr;
};

export const createSortedArray = (lenght: number): number[] => {
  const arr = [];
  for (let i = 1; i < lenght + 1; i++) {
    arr.push(i);
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

export const contain = (arr: number[], x: number): boolean => {
  for (let d of arr) {
    if (d === x) return true;
  }
  return false;
};
