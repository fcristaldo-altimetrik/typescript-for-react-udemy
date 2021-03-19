import { runModules } from "./Modules/moduleUse";
import { runTypes } from "./Types/Types";
import { runInterfaces } from "./Interfaces/Interfaces";
import { runFunctions } from "./Functions/Functions";
import { runClasses } from "./Classes/Classes";
import { runImplementingInterfaces } from "./Interfaces/ImplementingInterfaces/ImplementingInterfaces";

console.log("\n\n---------- START ----------");
runModules();
runTypes();
runInterfaces();
runFunctions();
runClasses();
runImplementingInterfaces();
console.log("\n\n---------- END ----------");
