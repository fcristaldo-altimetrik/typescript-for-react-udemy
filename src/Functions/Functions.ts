// Functions (optional and deafult parameters)
function sum(a: number, b: number): number {
  return a + b;
}

//defining type to create function later
type MyFunc = (a: number, b: number) => number;

const sum2: MyFunc = (a, b) => a + b;

//optional arguments
function sum3(a: number, b?: number): number {
  return a + (b || 0); // we have to handle possible null
}

//optional arguments (with default value)
function sum4(a: number, b: number = 0): number {
  return a + (b || 0); // we have to handle possible null
}

// Unknown number of arguments
function sumEverything(...numbers: number[]): number {
  return numbers.reduce((result, num) => result + num, 0);
}

// Overloads
// same function name with different amount of params declared.
// then we cave to specify the funciont receiving ...args as an array and make the if or switch to hangle every possible scenario
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;
function calcArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1];
  }
  return Math.pow(args[0], 2);
}

export function runFunctions() {
  console.log("\nrunFunctions");
  console.log("sum(2, 2)", sum(2, 2));
  console.log("sum3(3)", sum3(3));
  console.log("sum4(5)", sum4(5));
  console.log("sumEverything(2,3,4,5,6)", sumEverything(2, 3, 4, 5, 6));
  console.log("sumEverything(2,3,6)", sumEverything(2, 3, 6));
  console.log("calcArea(2,3)", calcArea(2, 3));
  console.log("calcArea(3)", calcArea(3));
}
