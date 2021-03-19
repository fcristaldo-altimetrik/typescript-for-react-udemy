// Boolean
let b: boolean = true;

// Number
let num: number = 1;

// String
let str: String = "Hi";

let n: null = null;
let u: undefined = undefined;

//No possible to assign null to a number type variable
//let someNumber : number = null;

function uppercaseFirstLetter(str: string | null) {
  if (str === null) {
    return;
  }
  return str[0].toUpperCase() + str.substr(1);
}

// Primitive types
type primitiveTypes = boolean | number | string | symbol | null | undefined;

// Objects
const myObj: Object = {};

// void
// for functions with no return
function log(msg: String): void {
  console.log(msg);
  // return msg; // will warn
}

// Array
let array1: string[] = ["x", "y", "z"];

// Tuple, a fixed array with possible different types on each element
let tuple: [string, number] = ["Facundo", 24];

// Enum, set of choices
enum Color {
  red,
  green,
  blue
}
let myFavColor: Color = Color.blue;
let myFavColor2: string = Color[0]; //equivalent to red

//we can specify numbers for each value
enum Colors {
  red = 45,
  green = 22,
  blue = 88
}
let myFavColor3: string = Colors[22]; //equivalent to red

// Any, for unknown type
let any: any;
any = 2;
any = "str";
any = true;

// Type assertions
// commented to avoid console errors, to be able to run
// const email = document.getElementById("email");
// if (email) {
//   email.addEventListener("change", (e) => {
//     const input = e.currentTarget;
//     //console.log(input.value) //We must assert that it is a HTMLInputElement

//     const input2 = e.currentTarget as HTMLInputElement;
//     console.log(input2.value);
//   });
// }

export function runTypes() {
  console.log("\nrunTypes");
  console.log(uppercaseFirstLetter("hello"));
  console.log(uppercaseFirstLetter(null));
}
