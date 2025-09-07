//Void

/*
 *  The TS-specific void type represents the return value of functions that don't return a value.
 *  function logMessage(message: string): void {
        console.log(message);
        // nothing is returned here!
    }

* In JavaScript, a function without a return statement returns undefined by default... but that's kinda vague.
* TypeScript uses the void keyword to indicate that truly nothing is returned.
* In other words, void more explicitly communicates the intent that a function returns nothing.
 */