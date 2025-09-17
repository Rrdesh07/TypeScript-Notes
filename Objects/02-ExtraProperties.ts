// Extra properties

// Most of the time , when you pass an object to a function in Typescript, it's
// okay to have more properties than those defined in the function's parameter type
// Not okay to have missing properties

// However, when you pass an object literal directly to function , Typescript performs what's called
// "excess property checking". Which means it also will not allow extra properties.

// For example , say we have this type:

type Spaceship={
    name:string,
    speed:number
};

// and we make an object with one extra property

const falcon={
    name:"falcon",
    speed:500,
    weapons:4
}

// we can still pass this object to a function which expects a Spaceship type

function pilot(spaceship:Spaceship){
    console.log(spaceship.name);
}

pilot(falcon)

// But interestingly, if we pass in the same object literal (no variable assignment ) ,Typescript will throw an error

//Error : Object literal may only specify known properties, and 'weapons' does not exist in type 'spaceship'.
pilot({name:"millennium falcon",speed:200,weapons:5});

// It's also worth nothing that many of these kinds of rules are configurable in the tsconfig.json file,
// which we'll cover later. we'll mostly refer to default behaviour in this course.
