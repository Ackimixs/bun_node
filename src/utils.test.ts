import { describe, it, expect } from "bun:test";
import {
  contain,
  createRandomArray,
  createSortedArray,
  isSorted,
} from "./utils";

describe("test the utils", () => {
  it("create random array", () => {
    const arr = createRandomArray(10_000, 10_000_000);
    expect(arr.length).toBe(10_000);
  });

  it("create sorted array", () => {
    const arr = createSortedArray(100_000);
    expect(isSorted(arr)).toBe(true);
  });

  it("is sorted", () => {
    const arr = createSortedArray(100_000);
    expect(isSorted(arr)).toBe(true);
  }); // umh ? yeah that is fine

  it("is not sorted", () => {
    const arr = createRandomArray(10_000, 10_000);
    expect(isSorted(arr)).toBe(false);
  });

  it("contain", () => {
    const arr = createRandomArray(10_000, 10_000_000);
    const x = Math.floor(Math.random() * 10_000);
    arr[5_000] = x;
    expect(contain(arr, x)).toBe(true);
  });

  it("not contain", () => {
    const arr = createRandomArray(10_000, 1_000);
    const x = 10_000;
    expect(contain(arr, x)).toBe(false);
  });
});
