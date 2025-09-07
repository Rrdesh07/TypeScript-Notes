// Any

/*
*   Okay, so we know Typescript's purpose is to add static types to javascript, and we know all javascript
*   is valid Typescript.
*
*   In practical terms, what that means is when you compile plain Javascript code using tsc, your codebase is full of
*   any types.
*
*   The any type is exactly what it sounds like - a type that can be anything. The purpose of types, really is to
*   narrow down the possible values that a variable can hold. From that perspective any is the most useless type
*   because it doesn't narrow anything down at all! But it's important because it allows you to opt out of type-checking
*   for a variable.
*
*   The any type is super useful when you migrate an existing javascript codebase to typescript. The(very simplified
*   process is :
*   1.Change file extensions from .js to .ts
    2.Get tsc running without errors (often works out of the box, due to any)
    3.Slowly over time, replace any's with more specific type

* */