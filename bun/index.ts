const sortingBubble = (arr: number[]) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

const mergeSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left: number[], right: number[]): number[] => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length)
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
};

const createRandomArray = (length: number): number[] => {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 1000));
  }
  return arr;
};

const isSorted = (arr: number[]) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

const main = () => {
  let arr = createRandomArray(1000000);

  const date = new Date();
  arr = mergeSort(arr);

  console.log(new Date().getTime() - date.getTime());

  console.log(isSorted(arr));
};

main();
