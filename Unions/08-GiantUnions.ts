// Giant Unions

//So what happens if we create an absoulte monstrosity of a union type?
// It can happen faster than you'd except... Say were building a MoveMessage
// type describing a message about character's movement in a game:

type Distance = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Class =
    | "Warrior"
    | "Rogue"
    | "Mage"
    | "Cleric"
    | "Paladin"
    | "Druid"
    | "Hunter"
    | "Shaman";
type MoveMessage =
    `The ${Class} moves ${Distance}, ${Distance}, ${Distance}, ${Distance}, then ${Distance}.`;

const message: MoveMessage = "The Warrior moves 6, 2, 5, 4, then 7 spaces";

//There's good chance you'll run into an error like this:
//Error : Union type too complex to represent.
//This happens because we've tried to create an explicit union of types that exploded in size.
// There are hundreds of thousands of possible combinations in the type above.
// Even if we remove a couple of the Distance values:

// type MoveMessage=`The ${Class} moves ${Distance}, ${Distance}, then ${Distance}.`;

// When I hover the MoveMessage type in my editor, I see:

//type DisplayMessages = "The Warrior moves 1, 1, then 1." | "The Warrior moves 1, 1, then 2." | "The Warrior moves 1, 1, then 3." |
// "The Warrior moves 1, 1, then 4." | "The Warrior moves 1, 1, then 5." | ... 5826 more ... | "The Shaman moves 9, 9, then 9."

type DisplayMessages =
    `The ${Class} moves ${Distance}, ${Distance}, then ${Distance}.;`;

// there are still over 5000 combinations ! Typescript doesn't like that-it can slow down your editor
// and compilation times to a crawl. So at a certain point,tsc says "enough is enough"
// This is a good example of a phrase you might hear in the TypeScript community.
//"Type mastrubation" I know it's a bit crass,
//but I didn't invent the term, It just means that you can go too far with trying to create hyper specific types.
// maybe a string would have sufficed after all.