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
  c: string = " hi" /*  default value   */
) => {
  console.log(`Hello world! ${a} ${b} ${c}`);
};

myFunc2("a", 5); //Hello world a 5
myFunc3("a", 5); //Hello world a 5 hi

const myFunc4 = (a: number, b: number, c: string = "true"): string => {
  // return a + b; -> error as it will return a number
  return `a + b`;
};

myFunc4(5, 5); // a + b
