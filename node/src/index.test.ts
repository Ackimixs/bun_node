import assert from "node:assert/strict";
import { beforeEach, describe, it } from "node:test";
import {
  mergeSort,
  quickSort,
  bubblSort,
  shellSort,
  selectionSort,
  bucketSort,
  countingSort,
  heapSort,
  insertionSort,
  oddEvenSort,
  radixSort,
} from "./algo";
import { isSorted, createRandomArray } from "./utils";

describe("test algorithm", () => {
  let arr: number[] = [];
  beforeEach(() => {
    arr = createRandomArray(10_000, 10_000_000);
  });

  it("merge sort", () => {
    assert.strictEqual(isSorted(mergeSort(arr)), true);
  });

  it("quick sort", () => {
    assert.strictEqual(isSorted(quickSort(arr)), true);
  });

  it("bubble sort", () => {
    assert.strictEqual(isSorted(bubblSort(arr)), true);
  });

  it("shell sort", () => {
    assert.strictEqual(isSorted(shellSort(arr)), true);
  });

  it("selection sort", () => {
    assert.strictEqual(isSorted(selectionSort(arr)), true);
  });

  it("bucket sort", () => {
    assert.strictEqual(isSorted(bucketSort(arr)), true);
  });

  it("counting sort", () => {
    assert.strictEqual(isSorted(countingSort(arr)), true);
  });

  it("radix sort", () => {
    assert.strictEqual(isSorted(radixSort(arr)), true);
  });

  it("heap sort", () => {
    assert.strictEqual(isSorted(heapSort(arr)), true);
  });

  it("insertion sort", () => {
    assert.strictEqual(isSorted(insertionSort(arr)), true);
  });

  it("odd even sort", () => {
    assert.strictEqual(isSorted(oddEvenSort(arr)), true);
  });
});
