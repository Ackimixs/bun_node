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
      const current = arr[i];
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

export const selectionSort = (arr: number[]): number[] => {
  const len = arr.length;
  let minIndex;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};

export const heapSort = (arr: number[]): number[] => {
  const len = arr.length;
  let heapSize = len;
  buildMaxHeap(arr);
  for (let i = len - 1; i >= 0; i--) {
    swap(arr, 0, i);
    heapSize--;
    heapify(arr, 0, heapSize);
  }
  return arr;
};

const buildMaxHeap = (arr: number[]): void => {
  const len = arr.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i, len);
  }
};

const heapify = (arr: number[], i: number, heapSize: number): void => {
  const left = i * 2 + 1;
  const right = i * 2 + 2;
  let largest = i;
  if (left < heapSize && arr[left] > arr[largest]) largest = left;
  if (right < heapSize && arr[right] > arr[largest]) largest = right;
  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, largest, heapSize);
  }
};

const swap = (arr: number[], i: number, j: number): void => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

export const insertionSort = (arr: number[]): number[] => {
  const len = arr.length;
  let preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex--];
    }
    arr[preIndex + 1] = current;
  }
  return arr;
};

export const countingSort = (arr: number[]): number[] => {
  const len = arr.length;
  if (len <= 1) return arr;
  let maxValue = arr[0];
  for (let i = 1; i < len; i++) {
    if (arr[i] > maxValue) maxValue = arr[i];
  }
  const bucket = new Array(maxValue + 1);
  let sortedIndex = 0;
  const arrLen = arr.length;
  const bucketLen = maxValue + 1;
  for (let i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) bucket[arr[i]] = 0;
    bucket[arr[i]]++;
  }
  for (let j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }
  return arr;
};

export const bucketSort = (arr: number[], bucketSize = 5): number[] => {
  const len = arr.length;
  if (len === 0) return arr;
  let minValue = arr[0];
  let maxValue = arr[0];
  for (let i = 1; i < len; i++) {
    if (arr[i] < minValue) minValue = arr[i];
    else if (arr[i] > maxValue) maxValue = arr[i];
  }
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount);
  for (let i = 0; i < buckets.length; i++) buckets[i] = [];
  for (let i = 0; i < len; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }
  arr.length = 0;
  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);
    for (let j = 0; j < buckets[i].length; j++) arr.push(buckets[i][j]);
  }
  return arr;
};

export const radixSort = (arr: number[], radixBase = 10): number[] => {
  if (arr.length < 2) return arr;
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  let significantDigit = 1;
  while ((maxValue - minValue) / significantDigit >= 1) {
    arr = countingSortForRadix(arr, radixBase, significantDigit, minValue);
    significantDigit *= radixBase;
  }
  return arr;
};

const countingSortForRadix = (
  arr: number[],
  radixBase: number,
  significantDigit: number,
  minValue: number
): number[] => {
  let bucketsIndex;
  const buckets = [];
  const aux = [];
  for (let i = 0; i < radixBase; i++) buckets[i] = 0;
  for (let i = 0; i < arr.length; i++) {
    bucketsIndex = Math.floor(
      ((arr[i] - minValue) / significantDigit) % radixBase
    );
    buckets[bucketsIndex]++;
  }
  for (let i = 1; i < radixBase; i++) buckets[i] += buckets[i - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    bucketsIndex = Math.floor(
      ((arr[i] - minValue) / significantDigit) % radixBase
    );
    aux[--buckets[bucketsIndex]] = arr[i];
  }
  for (let i = 0; i < arr.length; i++) arr[i] = aux[i];
  return arr;
};

export const oddEvenSort = (arr: number[]): number[] => {
  const len = arr.length;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < len - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
      }
    }
    for (let i = 0; i < len - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
      }
    }
  }
  return arr;
};
