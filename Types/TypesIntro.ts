// Basic Types

/*
*  Typescript has static types! This TypeScript code:
*
* */

const bootupMessage:string = "Bootup message";

// is equivalent of this javascript code

const bootupMessageCopy="Bootup message copied";


// The : string annotation is the variable type. This works for the other primitive types like Number,boolean,null and undefined.

const port:number=3000;
const isServerOnline:boolean=true;
const noValue:null=null;
const noDefined:undefined=undefined;

// If a value doesn't match a type, TypeScript will throw an error when it compiles. For example
// this is no-no :

// const bootMessage:string=23;
// Error : Type 'number' is not assignable to type 'string'.
