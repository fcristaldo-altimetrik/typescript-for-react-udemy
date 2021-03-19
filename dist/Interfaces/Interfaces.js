"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runInterfaces = void 0;
let a = { someprop: 2 };
//we can assign a to be because they have same structure
let b = a;
//if we declar only someprop, we dont get an error cause the otherprop is optional
let d = {
    someprop: 3
};
// Here we do can assign a to d becase otherprop of d is optional
d = a;
let e = { someprop: 5 };
let f = {};
f["name"] = "F";
f.surname = "C";
f.age = 24;
const sum = (a, b) => a + b;
let child = { x: "", y: "", z: "" };
function runInterfaces() {
    console.log("\nrunInterfaces");
    console.log(sum(2, 4));
}
exports.runInterfaces = runInterfaces;
