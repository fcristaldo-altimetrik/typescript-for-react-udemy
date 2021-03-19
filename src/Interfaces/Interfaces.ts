interface A {
  someprop: number;
}
//interface B is equal to A so they will be assignable
interface B {
  someprop: number;
}

interface C {
  someprop: number;
  other: string;
}

let a: A = { someprop: 2 };

//we can assign a to be because they have same structure
let b: B = a;

// We cannot assign a to c because they have different props
//let c : C = a;

//To make a property optional we add a ? next to the prop name
interface D {
  someprop: number;
  otherprop?: string;
}
//if we declar only someprop, we dont get an error cause the otherprop is optional
let d: D = {
  someprop: 3
};
// Here we do can assign a to d becase otherprop of d is optional
d = a;

//if we dont want a property to be updated once an oject is created, we mark it as readonly when defining the interface
interface E {
  readonly someprop: number;
  otherprop?: string;
}
let e: E = { someprop: 5 };
// Not able to do this
// e.someprop= 3

// index signature, to be able to add properties on the fly
interface F {
  [key: string]: string | number;
}
let f: F = {};
f["name"] = "F";
f.surname = "C";
f.age = 24;

// Call Signature, to create interfaces for functions
interface Sum {
  //first part is params: then return type
  (a: number, b: number): number;
}
const sum: Sum = (a, b) => a + b;

// Extending interfaces
export interface Parent {
  x: string;
}
export interface Parent2 {
  z: string;
}
export interface Child extends Parent, Parent2 {
  y: string;
  getCoorditates(): { x: string; y: string; z: string };
}
let child: Child = { x: "", y: "", z: "" };

export function runInterfaces() {
  console.log("\nrunInterfaces");
  console.log(sum(2, 4));
}
