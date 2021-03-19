import { isJSDocAugmentsTag } from "typescript";

// Safe Guards for functions
function someFn(myArgument: number | string) {
  if (typeof myArgument === "string") {
    //string
    myArgument.toUpperCase();
  } else {
    //number
    myArgument.toFixed();
  }
}

// Safe Guards for interfaces
interface Dog {
  bark(): void;
  walk(): void;
}
interface Cat {
  meow(): void;
  walk(): void;
}

function isDog(pet: Dog | Cat): pet is Dog {
  return (<Dog>pet).bark !== undefined;
}

function callMyPet(pet: Dog | Cat) {
  pet.walk();
  if (isDog(pet)) {
    //Its a dog
    pet.bark();
  } else {
    //its a cat
    pet.meow();
  }
}

// Safe Guards for classes
class Foo {
  foo: number;
  commonProp: string;
}
class Bar {
  bar: number;
  commonProp: string;
}

function fooBarFunction(obj: Foo | Bar) {
  if (obj instanceof Foo) {
    // its Foo
    obj.foo;
  } else {
    // its Bar
    obj.bar;
  }
}
