import { beforeEach, describe, it, expect } from "bun:test";
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
});
