// Type Alias

// It can get really cumbersome to write out long custom types whenever you want to use them.
// For example may be we have a function that accepts another function as input.Let's use toally
//make-believe example, something that sets a timeout:

function setLoggerTimeout(
    loggerCallBack:(s1:string,s2:string) => string,
    delay:number,
){
    // do something
}

// that's nasty function signature... let's use the type keyword instead to create type alias:

type loggerback=(s1:string,s2:string)=> string;

// Now anytime we need to use this specific kind of function (one that accepts two strings and returns a string),
// we can use LoggerCallback:

function setLoggerTimeout2(LoggerCallback:loggerback,delay:number){
    // do something
}

// muuuuuch better! it's easy to read and it's reusable.