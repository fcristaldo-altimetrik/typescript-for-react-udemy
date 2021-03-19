// We can import default export just typing a name or a named function with {}
import multiply, { multiplyByTwo } from "./multiply";
//We can make aliases for functions imported
import multiplyDefault, { multiplyByTwo as byTwo } from "./multiply";

// Also we can "import all ( * ) as someName" wich gives us a placeholder to call the exported (named and default) functions
import * as multiplyModule from "./multiply";
const a = 2;
const b = 3;

export function runModules() {
  // with import * as someName we use defualt to call the default export function
  console.log(`1) ${a} * ${b} = ${multiplyModule.default(a, b)}`);

  // calling the alias
  console.log(`2) byTwo(${a}) = ${byTwo(a)}`);

  console.log(`3) ${a} * ${b} = ${multiply(a, b)}`);
}
