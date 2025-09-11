// Arrays

// The most common way to declare an array is using the bracket notation,string[],number[],etc:

function trainJedi(jediKnights:string[]){
    for(let knight of jediKnights){
        console.log(knight);
    }
}

trainJedi(["Dooku","Qui-Gon","Xantos"]);