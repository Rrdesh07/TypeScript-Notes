// Evolving Any

// when you create a new empty array, Typescript infers it as any[].
let inventory=[]
// inventory:any[]

// If you then push a type into it, Typescript will infer the array as that type.
inventory.push(42);
//inventory:number[]

// where it gets weird is that you're actually still allowed to push other types into the array, it just keep updating the
// underlying type:
inventory.push("robe");
// inventory:(number|string)[]

// This is so fascinating because if we had explicitly typed the array as number[], we would have gotten an error
// when trying to push a string into it .

let inventory:number[]=[];
inventory.push("robe");
//Error : Argument of type 'string' is not assignable to parameter of type 'number'

// The "evolving any" is a special type inference feature. It's not very useful if you're trying to restrict what can be pushed into
// an array within the initial scope, but it is useful outside of that scope. Let me show you what i mean. Let's say I make a
// function like this :

function getConfig(){
    let config=[];
    config.push("api-key");
    config.push(2000);
    return config;
}

//within getConfig, the array feels like any.. I can just keep adding stuff. However , when I use getConfig:
let config=getConfig();
// config:(string|number)[]

config.push(false);
// Error :Argument of type 'boolean' is not assignable to parameter of type 'string|number'

// Now i get an error ! The evolving any stops evolving when it's passed around.