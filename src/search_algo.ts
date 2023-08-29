import { quickSort } from "./sort_algo";
import { contain, createRandomArray, createSortedArray } from "./utils";

export const binairySearch = (
  arr: number[],
  x: number,
  start: number = 0,
  stop: number = arr.length - 1
): number => {
  const middle = Math.floor((stop - start) / 2 + start);

  if (x === arr[middle]) {
    return middle;
  } else if (start === stop) {
    return -1;
  } else if (x > arr[middle]) {
    return binairySearch(arr, x, middle + 1, stop);
  } else {
    return binairySearch(arr, x, start, middle - 1);
  }
};

export const linearSearch = (arr: number[], x: number): number => {
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) return i;
  }
  return -1;
};

export const sentinelLinearSearch = (arr: number[], x: number): number => {
  const last = arr[arr.length - 1];
  arr[arr.length - 1] = x;
  let i = 0;
  while (x !== arr[i]) {
    i++;
  }
  arr[arr.length - 1] = last;
  if (i < arr.length - 1 || x === arr[arr.length - 1]) return i;
  return -1;
};

export const metaBinairySearch = (arr: number[], x: number): number => {
  let start = 0;
  let stop = arr.length - 1;
  let middle = Math.floor((stop - start) / 2 + start);

  while (x !== arr[middle] && start < stop) {
    if (x > arr[middle]) {
      start = middle + 1;
    } else if (x < arr[middle]) {
      stop = middle - 1;
    }
    middle = Math.floor((stop - start) / 2 + start);
  }

  return x === arr[middle] ? middle : -1;
};

export const ternarySearch = (arr: number[], x: number): number => {
  let start = 0;
  let stop = arr.length - 1;
  let middle1 = Math.floor((stop - start) / 3 + start);
  let middle2 = Math.floor(((stop - start) / 3) * 2 + start);

  while (x !== arr[middle1] && x !== arr[middle2] && start < stop) {
    if (x > arr[middle2]) {
      start = middle2 + 1;
    } else if (x < arr[middle1]) {
      stop = middle1 - 1;
    } else {
      start = middle1 + 1;
      stop = middle2 - 1;
    }
    middle1 = Math.floor((stop - start) / 3 + start);
    middle2 = Math.floor(((stop - start) / 3) * 2 + start);
  }

  if (x === arr[middle1]) return middle1;
  if (x === arr[middle2]) return middle2;
  return -1;
};

export const jumpSearch = (arr: number[], x: number): number => {
  const step = Math.floor(Math.sqrt(arr.length));
  let start = 0;
  let stop = step;
  while (x > arr[stop] && stop < arr.length - 1) {
    start = stop;
    stop += step;
    if (stop > arr.length - 1) stop = arr.length - 1;
  }

  for (let i = start; i <= stop; i++) {
    if (arr[i] === x) return i;
  }

  return -1;
};

export const interpolationSearch = (
  arr: number[],
  x: number,
  lo: number = 0,
  hi: number = arr.length - 1
): number => {
  let pos;

  if (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
    pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));
    if (arr[pos] == x) {
      return pos;
    }
    if (arr[pos] < x) {
      return interpolationSearch(arr, x, pos + 1, hi);
    }
    if (arr[pos] > x) {
      return interpolationSearch(arr, x, lo, pos - 1);
    }
  }
  return -1;
};

export const exponentialSearch = (arr: number[], x: number): number => {
  let bound = 1;
  while (bound < arr.length && arr[bound] < x) {
    bound *= 2;
  }

  const start = Math.floor(bound / 2);
  const stop = Math.min(bound, arr.length - 1);

  return binairySearch(arr, x, start, stop);
};

export const fibonacciSearch = (arr: number[], x: number): number => {
  let fibMMm2 = 0;
  let fibMMm1 = 1;
  let fibM = fibMMm2 + fibMMm1;
  let n = arr.length;

  while (fibM < n) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }

  let offset = -1;

  while (fibM > 1) {
    let i = Math.min(offset + fibMMm2, n - 1);
    if (arr[i] < x) {
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (arr[i] > x) {
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    } else return i;
  }

  if (fibMMm1 && arr[n - 1] == x) {
    return n - 1;
  }

  return -1;
};
