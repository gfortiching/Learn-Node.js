class CustomError {
    constructor(message) {
        this.message = message;

        Error.captureStackTrace(this, CustomError);
    }
}
  
  CustomError.prototype = Object.create(Error.prototype);
  CustomError.prototype.name = "CustomError";
  
  try {
    throw new CustomError("Something went wrong");
  } catch (error) {
    console.error(error.stack);
  }
  
  // Output:
  // CustomError: Something went wrong
  // at Object.<anonymous> (C:\Users\gfortiching\Node JS\Day 5\errCaptureStackTrace.js:13:11)
  // at Module._compile (node:internal/modules/cjs/loader:1218:14)
  // at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
  // at Module.load (node:internal/modules/cjs/loader:1081:32)
  // at Module._load (node:internal/modules/cjs/loader:922:12)
  // at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
  // at node:internal/main/run_main_module:23:47