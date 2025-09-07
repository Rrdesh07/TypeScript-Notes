//Inferred Return Types

// So you know how we discussed that:
const myPowerLevel=9000;

// is better Typescript than:
const myPowerLevelVar:number = 9000;

// what follows is a bit of personal opinion, but i think the same is generally true for function return
// not parameter types.
// instead of this :

function sampleFun(a:number,b:number):number{
    return a + b;
}

// we can write like this :
function sampleFunc(a:number,b:number){
    return a + b;
}

// And Typescript infers the output type as number.
