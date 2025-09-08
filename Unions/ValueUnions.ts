// Value Unions

// Take another look at our last example of a literal type :
function move(direction:"north"){
    //Implementation...
}

// To make it a bit more useful, let's combine that idea with union type:
function move(direction:"north"|"south"|"east"|"west"){
    //Implementation
}

// And then let's refactor it to make a new "Direction" type that we can reuse:
type Direction="north"|"south"|"east"|"west";

function move(direction:Direction):void{
    //Implementation...
}