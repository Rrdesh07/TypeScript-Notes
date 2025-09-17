// Empty Object Type

// say i innocently create a new empty object:
let newUser={}

// Then go to add properties to it later:
// Property 'name' does not exist on type '{}'
newUser.name="Lane" ;
console.log(newUser);

// Typescript doesn't like that!
// It makes sense, we never told typescript which properties to allow... but here's what really crazy:
// this is actually allowed.
let newSecondUser={};
newSecondUser="lane";

// Yup. You can just reassign an empty object to a string.
// In fact, you can reassign it to anything except null or undefined,
// because everything else is technically an object!
// So , to get back to our first example, what you probably want to do is just predefine the allowed fields:

type User={
    name:string
}

let newThirdUser : User = {}
newThirdUser.name="lane";

console.log(newThirdUser);

