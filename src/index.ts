import { runModules } from "./Modules/moduleUse";
import { runTypes } from "./Types/Types";
import { runInterfaces } from "./Interfaces/Interfaces";
import { runFunctions } from "./Functions/Functions";

console.log("\n\n---------- START ----------");
runModules();
runTypes();
runInterfaces();
runFunctions();
console.log("\n\n---------- END ----------");
