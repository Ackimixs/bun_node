export const bubblSort = (arr: number[]) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

export const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

export const mergeSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left: number[], right: number[]): number[] => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length)
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
};

export const shellSort = (arr: number[]): number[] => {
  const len = arr.length;
  let gap = Math.floor(len / 2);
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let j = i;
      let current = arr[i];
      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap];
        j = j - gap;
      }
      arr[j] = current;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
};
