 // Function Type syntax

 /*
 * One of the most useful places for explicit types in function  signatures. For example:
 * */

 function createMessage(name:string,a:number,b:number):string{
     return `${name} is ${a+b}`;
 }

 //The :type after each parameter specifies that parameters type, and the :type after all the parameters
 // specifies the return type, it works the same way with arraow functions

 const createMessageFunction=(name:string,a:number,b:number):string=>{
     return `${name} is ${a+b}`;
 };