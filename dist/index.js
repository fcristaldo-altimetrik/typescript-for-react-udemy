"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// We can import default export just typing a name or a named function with {}
const multiply_1 = __importDefault(require("./Modules/multiply"));
//We can make aliases for functions imported
const multiply_2 = require("./Modules/multiply");
// Also we can "import all ( * ) as someName" wich gives us a placeholder to call the exported (named and default) functions
const multiplyModule = __importStar(require("./Modules/multiply"));
const a = 2;
const b = 3;
// with import * as someName we use defualt to call the default export function
console.log(`1) ${a} * ${b} = ${multiplyModule.default(a, b)}`);
// calling the alias
console.log(`2) byTwo(${a}) = ${multiply_2.multiplyByTwo(a)}`);
console.log(`3) ${a} * ${b} = ${multiply_1.default(a, b)}`);
