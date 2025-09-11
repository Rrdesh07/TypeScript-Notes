//Type Parameters

// Typescript offers an alternative way to declare arrays using type parameter syntax:
// Arrays<T>, which for now , just know that it's basically that same as the "normal" T[] syntax
// you'll see both versions in the wild

// These functions declarations are the same

// using bracket notation
function assignLightsaberColors(name:string,colors:string[]):void{
    // .....
}

// Using generic types parameters syntax
function assignLightsaberColors(name:string,colors:Array<string>):void{
    //...
}

// You can also use either syntax when declaring variables:
const colors: string[] = [
    "blue",
    "green",
    "purple",
    "red",
    "orange",
    "white",
    "darksaber",
];
const midichlorianCounts: Array<number> = [
    1000, 5000, 12000, 20000, 27000, 40000,
];

// Later when we talk about generics , it will make a bit more sense why you might use Array<T> over T[]
// and the answer is mostly because it will feel consistent with other generic types.

