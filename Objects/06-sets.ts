// Sets

//Typescript has a built-in type for sets , which are collections of unique values.
// You can ensure that all the values in the set are of the same type by specifying a type parameter <T>

// A set that contains only strings
const justiceLeague=new Set<string>();

justiceLeague.add("Green Arrow");
justiceLeague.add("Yellow Arrow");

// Error : Argument of type '2' is not assignable to parameter of type 'string'
justiceLeague.add(2);
console.log(justiceLeague);

// An array can be converted into a set , which automatically removes duplicate values

const names=["A", "B", "C"];
// const justiceLeague = new Set<string>(names);
//
// console.log(justiceLeague);
// Set {'A','B','C'}

// Sets also have a few other interesting methods and properties
//.delete()
//.has()
//.forEach()
//.size


