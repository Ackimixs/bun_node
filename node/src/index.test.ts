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

await (async () => {
  await describe("test algorithm", async () => {
    let arr: number[] = [];
    beforeEach(() => {
      arr = createRandomArray(10000, 1000);
    });

    await it("merge sort", () => {
      assert.strictEqual(isSorted(mergeSort(arr)), true);
    });

    await it("quick sort", () => {
      assert.strictEqual(isSorted(quickSort(arr)), true);
    });

    await it("bubble sort", () => {
      assert.strictEqual(isSorted(bubblSort(arr)), true);
    });

    await it("shell sort", () => {
      assert.strictEqual(isSorted(shellSort(arr)), true);
    });

    await it("selection sort", () => {
      assert.strictEqual(isSorted(selectionSort(arr)), true);
    });
  });
})();
