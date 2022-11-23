//**   ----------------------Array-------------------------  */

let abc: string[];

// abc.push("abc") ; //Variable 'abc' is used before being assigned.

let a: string[] = [];

a.push("abc"); // ok

let ab: (string | number)[] = [];

ab.push("abc"); // ok
ab.push(9); // ok
// ab.push(true); // error -> Argument of type 'boolean' is not assignable to parameter of type 'string | number'

//*** @apply   ----------------------Object-------------------------  */

let c: object;

c = { ab: "abc", bc: 9, cd: true }; //okay

let d: {
  name: string;
  age: number;
  adult: boolean;
};
