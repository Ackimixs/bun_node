import assert from "node:assert/strict";
import { beforeEach, describe, it } from "node:test";
import {
  mergeSort,
  quickSort,
  bubblSort,
  shellSort,
  selectionSort,
} from "./algo";
import { isSorted, createRandomArray } from "./utils";

describe("test algorithm", () => {
  let arr: number[] = [];
  beforeEach(() => {
    arr = createRandomArray(10000, 1000);
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
});
