//Default Parameters

// Default parameters provide fallback values for optional arguments.

function newCharacter(name:string,role:string="warrior"):string{
    return `${name}${role}`;
}

console.log(newCharacter("Gandalf"));
//Gandalf is a warrior

console.log(newCharacter("Gandalf","Wizard"));
//Gandalf is a wizard

// when you use default parameters, you do not need to mark the parameter as optional by using ?
// when using a default value, the parameter type can be automatically inferred , so don't specify it:

function countdown(start=10):void{
    console.log(`Counting down from ${start}`);
}

// ...well , unless you need to widen the type.