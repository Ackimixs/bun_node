import { createRandomArray, isSorted } from "./utils";
import { quickSort } from "./algo";

const main = () => {
  let arr = createRandomArray(1000000, 100000);

  const date = new Date();
  arr = quickSort(arr);

  console.log(new Date().getTime() - date.getTime());

  console.log(isSorted(arr));
};

main();
