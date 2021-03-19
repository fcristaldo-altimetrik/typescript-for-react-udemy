"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTypes = void 0;
// Boolean
let b = true;
// Number
let num = 1;
// String
let str = "Hi";
let n = null;
let u = undefined;
//No possible to assign null to a number type variable
//let someNumber : number = null;
function uppercaseFirstLetter(str) {
    if (str === null) {
        return;
    }
    return str[0].toUpperCase() + str.substr(1);
}
// Objects
const myObj = {};
// void
// for functions with no return
function log(msg) {
    console.log(msg);
    // return msg; // will warn
}
// Array
let array1 = ["x", "y", "z"];
// Tuple, a fixed array with possible different types on each element
let tuple = ["Facundo", 24];
// Enum, set of choices
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let myFavColor = Color.blue;
let myFavColor2 = Color[0]; //equivalent to red
//we can specify numbers for each value
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 45] = "red";
    Colors[Colors["green"] = 22] = "green";
    Colors[Colors["blue"] = 88] = "blue";
})(Colors || (Colors = {}));
let myFavColor3 = Colors[22]; //equivalent to red
// Any, for unknown type
let any;
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
function runTypes() {
    console.log("\nrunTypes");
    console.log(uppercaseFirstLetter("hello"));
    console.log(uppercaseFirstLetter(null));
}
exports.runTypes = runTypes;
