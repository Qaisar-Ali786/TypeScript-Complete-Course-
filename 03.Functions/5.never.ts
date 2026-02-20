// What is never?
// in typescript, never is a special type that represent a
// value that never occur.it is used for functions that will
// never produce a value or never successfully complete.
// This function will never return normally.

function throwError(msg: string): never {
  throw new Error(msg);
}

// its main purpose is to tell typescript that this function
// will never return normally, it is not used to hide value
