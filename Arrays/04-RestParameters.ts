// Rest Parameters

// Rest parameters allow an indefinite numbers of final arguments, and brings
// them into the function body as an array. They're denoted by three dots(...)
// before the parameter name.

function gatherParty(partyName:string,...adventures:string[]):string{
    return `${partyName} consist of : ${adventures.join(', ')}`;
}

const msg=gatherParty("The Fellowship","Frodo","Sam","Gandalf");
console.log(msg);
// "The Fellowship consists of: Frodo, Sam, Gandalf"