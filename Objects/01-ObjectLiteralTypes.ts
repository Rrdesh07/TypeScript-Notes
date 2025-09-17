// Object Literal Types

/*
 *  Okay, I know i said unions were my favorite thing, and that's true when comparing TS to GO.
 *  But when it comes to the most useful "upgrade" from javascript to typescript, it's adding
 *  types to object
 */

// Object Literal types allows you to describe the shape of an object

function LogSaiyan(saiyan:{name:string,power:number}){
    console.log(saiyan.name);
}

// or more likely , you'll define the object type first

type Saiyan={
    name:string,
    power:number
}

function logSaiyan(saiyan:Saiyan){
    console.log(saiyan.name);
}

const person:Saiyan={name:"rohan",power:23}
logSaiyan(person)

// It's so nice to get a little red squiggly line in your editor when you misspell a property
// name in typescript! javascript won't fail until you run it...

