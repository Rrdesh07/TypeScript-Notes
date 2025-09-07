// Importing Types

// with certain Typescript configurations you can import types directly from a module
// import {user,Post} from "./module"

// but it's much safer and more efficient to use the import type syntax:
// import type {User,Post} from "./models"

//This way Typescript knows that you're only importing types, and it can drop the imports
// from the compiled Javascript code.
// This syntax also works:

//import {type User,type Post} from "./models";

// But personally I prefer the first one. It's more concise and keeps all my type imports in one place.