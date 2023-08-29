import { beforeEach, describe, it, expect } from "bun:test";
import {
  mergeSort,
  quickSort,
  bubblSort,
  shellSort,
  selectionSort,
  bucketSort,
  countingSort,
  radixSort,
  heapSort,
  insertionSort,
  oddEvenSort,
} from "./algo";
import { isSorted, createRandomArray } from "./utils";

describe("test algorithm", () => {
  let arr: number[] = [];
  beforeEach(() => {
    arr = createRandomArray(10_000, 10_000_000);
  });

  it("merge sort", () => {
    expect(isSorted(mergeSort(arr))).toBe(true);
  });

  it("quick sort", () => {
    expect(isSorted(quickSort(arr))).toBe(true);
  });

  it("bubble sort", () => {
    expect(isSorted(bubblSort(arr))).toBe(true);
  });

  it("shell sort", () => {
    expect(isSorted(shellSort(arr))).toBe(true);
  });

  it("selection sort", () => {
    expect(isSorted(selectionSort(arr))).toBe(true);
  });

  it("bucket sort", () => {
    expect(isSorted(bucketSort(arr))).toBe(true);
  });

  it("counting sort", () => {
    expect(isSorted(countingSort(arr))).toBe(true);
  });

  it("radix sort", () => {
    expect(isSorted(radixSort(arr))).toBe(true);
  });

  it("heap sort", () => {
    expect(isSorted(heapSort(arr))).toBe(true);
  });

  it("insertion sort", () => {
    expect(isSorted(insertionSort(arr))).toBe(true);
  });

  it("odd even sort", () => {
    expect(isSorted(oddEvenSort(arr))).toBe(true);
  });
});
