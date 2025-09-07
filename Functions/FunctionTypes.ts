// Function Types

// Functions themselves are values in javascript (and by extension ,Typescript), which means they must also have a type,
// right ? you might think:

// not so fast. Function types are much more specific than that.
// In typescript , a function type includes information about its parameters and return value


// Defining Function Types

// The syntax for a function type looks like this :
// (param1: type1, param2:type2,...) => returnType

// For example, a function that takes two numbers and returns a number:
//(a:number,b:number)=>number;

// and both of these functions are of that type:
const add =(a,b)=>a+b;
const sub=(a,b)=>a-b;