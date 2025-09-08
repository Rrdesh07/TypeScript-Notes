//Literal Types

// Many other statically typed languages (including Go) don't have nearly as extensive and
// powerful type systems as typescript. it should be obvious because it's in the name, but
// typescript truly has a massive type system.

// literal types are incredibly powerful for narrowing the possible values of a variable
//1.A String can have an infinite number of values.
//2.A number can have an infinite number of values.

// so what if we want to declare a "direction" variable?
function move(direction:string){
    //Implementation .....
}

//The kinda sucks... direction can be any string! To be fair ,in many languages enums are used to
// solve this problem .And while Typescript does have enums , which we will cover later, literal
// types are a more lightweight solution. A literal value can be used a type.

function move(direction:"north"){
    //Implementation...
}

// Now direction can only be "north"!