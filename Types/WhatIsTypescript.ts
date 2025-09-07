// What is Typescript

/*
*   Typescript is a language , but the official implementation of Typescript is the Typescript compiler (tsc).
*   Its job is simple take Typescript code, ensure it's valid and then compile it into Javascript code.
*
*   TypeScript is not supported natively by most Javascript engines , so it needs to be compiled into equivalent
*   Javascript code before it can be run. This interesting fact, that Typescript code is only type-checked before
*   it's run, has led to an interesting philosophical question:
*
*   Is Typescript basically just a really good linter?
*
*   And honestly... yeah, I think so. I get it, technically it does a lot more than your standard linter, but from a
*   practical perspective, it's primary benefit is to do static analysis on your almost-javascript code and catch
*   bugs before they happen.
*
*   Compiled to... Javascript?
*   --> Typescript is interesting in that it's "compiled" , but not in the traditional (compiled to binary) sense.
*       it's compiled to javascript. So it's not really compiled for performance reasons, but rather than for compatibility
*       reasons.
*
*   The goal of Typescript is to write javascript code that's easier to work with.
*
*   Compilation Errors:
*   So, in this course, if your code fails to compile, you'll get an error like this:
*
*   tsc:
*   Type 'string' is not assignable to type 'number'.
*
*   Only if the compilation is successful, then we can run the code. So your code needs to pass compilation, and needs
*   to run correctly.
* */