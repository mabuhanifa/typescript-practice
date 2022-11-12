// typescript practice
const log = console.log;

let abc: string = "document";
let num: number = 45;
let statement: boolean = true;
let newNum: string = num.toString();

let user: {
  name: string;
  age: number;
  email: string;
} = {
  name: "Mohammed Abu Hanifa",
  age: 26,
  email: "moh.abuhanifa@gmail.com",
};

function getState() {
  return "function";
}
function getState2(): void {
  let string = "function";
}

log(user);

export {};
