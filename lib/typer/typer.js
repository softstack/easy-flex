"use strict";
// interface IFoo extends IEasyFlexTheme {
// 	a: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringOfLength = void 0;
// const hello: StringOfLength<0, 8> = 'hello' // Type '"hello"' is not assignable to type { __value__: never }
// function isStringOfLength<Min extends number, Max extends number>(
//   str: string,
//   min: Min,
//   max: Max
// ): str is StringOfLength<Min, Max> => str.length >= min && str.length <= max;
var isStringOfLength = function (str, min, max) { return str.length >= min && str.length <= max; };
var stringOfLength = function (input, min, max) {
    if (typeof input !== 'string') {
        throw new Error('invalid input');
    }
    if (!isStringOfLength(input, min, max)) {
        throw new Error("input string is not between specified min ".concat(min, " and max ").concat(max));
    }
    return input;
};
exports.stringOfLength = stringOfLength;
var hello = (0, exports.stringOfLength)('hello', 1, 8); // hello now has type StringOfLength<1,8>
(0, exports.stringOfLength)('buongiorno', 1, 8); // Error: input string is not between specified min 1 and max 8
