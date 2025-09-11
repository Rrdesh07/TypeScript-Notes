// Heterogeneous Arrays

//If you can do it , in javascript, you can model it in Typescript.
// It might not always be preety.. but in this case it is!

// In languages like Go, you can't have an array that contains different types - at least not without using something
// a bit more complex like a struct or an interface .But in Typescript, we can just union the types!

// TypeScript infers the type as (string | number)[]
let lightsaberStyles = [1, 2, "double", "shoto"];

function describe(style: string | number): string {
    console.log(`Wield ${style} lightsaber`);
}

lightsaberStyles.forEach(describe);
// Wield 1 lightsaber
// Wield 2 lightsaber
// Wield double lightsaber
// Wield shoto lightsaber