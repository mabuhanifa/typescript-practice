type arr = Array<string>;

const last = (arr: Array<number> /* arr: number[] -> same  */) => {
  return arr[arr.length - 1];
};

const first = <T>(arr: Array<T> /* arr: T[] -> same  */) => {
  return arr[0];
};

const f = first([1, 2, 3]);
const f1 = first([1, "2", 3]);

const f2 = first<number>([1, 2, 3]);
// const fs2 = first<number>([1, "2", 3]); ->Type 'string' is not assignable to type 'number'

const fs = first(["1", "2", "3"]);
// const l = last([1,"2",3]) -> Type 'number' is not assignable to type 'string'.

const twoFn = <X, Y>(x: X, y: Y): [X, Y] /*  [X, Y] / (X|Y)[] */ => {
  return [x, y];
};

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
/*
type NumberTab = Tab<number> === type NumberTab={
 id: string;
  position: number;
  data: number;
}
*/

type StringTab = Tab<string>;

/*
type StringTab = Tab<number> === type NumberTab={
 id: string;
  position: number;
  data: string;
}
*/
