"use strict";
// What is never?
// in typescript, never is a special type that represent a
// value that never occur.it is used for functions that will
// never produce a value or never successfully complete.
// This function will never return normally.
Object.defineProperty(exports, "__esModule", { value: true });
function throwError(msg) {
    throw new Error(msg);
}
// its main purpose is to tell typescript that this function
// will never return normally, it is not used to hide value
//# sourceMappingURL=5.never.js.map