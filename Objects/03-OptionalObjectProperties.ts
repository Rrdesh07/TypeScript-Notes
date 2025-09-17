//Optional Object Properties

// The following is used way more often than most of us would like, but it's incredibly useful.
// Optional properties can be added to an object type with the ? operator.

type SuperHero={
    name:string,
    strength:number,
    cape?: boolean // cape is optional param
}

// That means that the type of .cape is actually boolean | undefined , just like optional function parameter

function fight(superhero:SuperHero){
    if(!superhero.cape){
        // we can exit from function
    }
    //do the functionality
}

