import { runModules } from "./Modules/moduleUse";
import { runTypes } from "./Types/Types";
import { runInterfaces } from "./Interfaces/Interfaces";

console.log("\n\n---------- START ----------");
runModules();
runTypes();
runInterfaces();
console.log("\n\n---------- END ----------");
