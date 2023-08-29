import { describe, it, expect, beforeEach } from "bun:test";
import { createRandomArray, contain, createSortedArray } from "./utils";
import { quickSort } from "./sort_algo";
import {
  binairySearch,
  exponentialSearch,
  fibonacciSearch,
  interpolationSearch,
  jumpSearch,
  linearSearch,
  metaBinairySearch,
  sentinelLinearSearch,
  ternarySearch,
} from "./search_algo";

describe("binairie search", () => {
  let arr: number[] = [];
  let x: number = 0;

  beforeEach(() => {
    arr = createRandomArray(100_000, 10_000);
    x = Math.floor(Math.random() * 10_000);
    while (!contain(arr, x)) {
      x = Math.floor(Math.random() * 10_000);
    }
    arr = quickSort(arr);
  });

  it("random", () => {
    expect(binairySearch(arr, x)).toBeGreaterThanOrEqual(0);
  });
});

describe("binairie search", () => {
  let arr: number[] = [];
  let x: number = 0;

  beforeEach(() => {
    arr = createSortedArray(10_000_000);
    x = 10_000_000;
  });

  it("worst case, biggest element", () => {
    expect(binairySearch(arr, x)).toBe(arr.length - 1);
  });

  it("worst case, smallest element", () => {
    expect(binairySearch(arr, 1)).toBe(0);
  });

  it("worst case, not in array", () => {
    expect(binairySearch(arr, x + 1)).toBe(-1);
  });
});

describe("binairie search", () => {
  let arr: number[] = [];
  let x: number = 0;

  beforeEach(() => {
    arr = createSortedArray(10_000_000);
    x = 5_000_000;
  });

  it("best case", () => {
    expect(binairySearch(arr, x)).toBe(4_999_999);
  });
});

describe("test every algo", () => {
  let arr: number[] = [];
  let x: number = 0;

  beforeEach(() => {
    arr = createSortedArray(1_000_000);
    x = Math.floor(Math.random() * 1_000_000);
  });

  it("linear search", () => {
    expect(linearSearch(arr, x)).toBeGreaterThanOrEqual(0);
  });

  it("sentinel linear search", () => {
    expect(sentinelLinearSearch(arr, x)).toBeGreaterThanOrEqual(0);
  });

  it("meta binairy search", () => {
    expect(metaBinairySearch(arr, x)).toBeGreaterThanOrEqual(0);
  });

  it("ternary search", () => {
    expect(ternarySearch(arr, x)).toBeGreaterThanOrEqual(0);
  });

  it("jump search", () => {
    expect(jumpSearch(arr, x)).toBeGreaterThanOrEqual(0);
  });

  it("interpolation search", () => {
    arr = createRandomArray(100_000, 10_000);
    arr = quickSort(arr);
    x = arr[5000];
    expect(interpolationSearch(arr, x)).toBeGreaterThanOrEqual(0);
  });

  it("exponential search", () => {
    expect(exponentialSearch(arr, x)).toBeGreaterThanOrEqual(0);
  });

  it("fibonacci search", () => {
    expect(fibonacciSearch(arr, x)).toBeGreaterThanOrEqual(0);
  });
});

describe("every algo, not in array", () => {
  let arr: number[] = [];
  let x: number = 0;

  beforeEach(() => {
    arr = createSortedArray(1_000_000);
    x = 1_000_001;
  });

  it("linear search", () => {
    expect(linearSearch(arr, x)).toBe(-1);
  });

  it("sentinel linear search", () => {
    expect(sentinelLinearSearch(arr, x)).toBe(-1);
  });

  it("meta binairy search", () => {
    expect(metaBinairySearch(arr, x)).toBe(-1);
  });

  it("ternary search", () => {
    expect(ternarySearch(arr, x)).toBe(-1);
  });

  it("jump search", () => {
    expect(jumpSearch(arr, x)).toBe(-1);
  });

  it("interpolation search", () => {
    expect(interpolationSearch(arr, x)).toBe(-1);
  });

  it("exponential search", () => {
    expect(exponentialSearch(arr, x)).toBe(-1);
  });

  it("fibonacci search", () => {
    expect(fibonacciSearch(arr, x)).toBe(-1);
  });
});
