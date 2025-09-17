//Readonly modifier

// The readonly modifier is very similar to the const keyword in javascript. It's added feature of Typescript
// that lets us mark object properties as read -only, meaning they can't be charged after initialization

// Normal Object properties are fully mutable, but if we use readonly, we can make a property immutable.

type Point={
    readonly x:number,
    y:number
}

// Now we can create a new point like this

const point: Point={
    x:10,
    y:20
}

// And we can update the y property just fine

point.y=30;

// but if we try to update x property. Typescript will throw an error.
// Error : cannot assign to 'x' because it is a read-only property.
point.x=20;


