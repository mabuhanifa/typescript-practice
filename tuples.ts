// array
let a = [3, "hello", { a: 3 }];
a[0] = "hello"; //->okay
a[1] = "hello"; //->okay
a[2] = "hello"; //->okay

// tuples
let b: [number, string, object] = [3, "hello", { a: 3 }];

b[0] = 5; // -> okay
b[1] = "world"; // -> okay
// b[0] = "world"; // error  -> Type 'string' is not assignable to type 'number'.
// b[1] = 9;  // error -> Type 'number' is not assignable to type 'string'.
