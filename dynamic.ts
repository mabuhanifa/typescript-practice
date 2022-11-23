let abcd: any;
abcd = 5; //ok
abcd = []; //ok
abcd = true; //ok
abcd = {}; //ok
abcd = "okay"; //ok

let bcd: {
  name: any;
  age: any;
};

bcd = {
  name: "bcd",
  age: "bcd",
};
