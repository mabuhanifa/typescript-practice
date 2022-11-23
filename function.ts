// typescript function

function addTwo(num: number) {
  return num + 2;
}

// function that return nothing
function addThree(num: number): void {
  let b = num % 2;
}

addTwo(5);

// let myFunc: Function;

let myFunc = (a: string, b: number) => {
  console.log(`Hello world! ${a} ${b}`);
};

/* ---------------------optional parameter ------------------*/

let myFunc2 = (a: string, b: number, c?: string /* optional parameter*/) => {
  console.log(`Hello world! ${a} ${b}`);
};

/* ---------------------default parameter ------------------*/

let myFunc3 = (
  a: string,
  b: number,
  c: string = " hi" /* default  parameter value*/
) => {
  console.log(`Hello world! ${a} ${b}`);
};

myFunc("5", 5);
myFunc2("5", 5);
