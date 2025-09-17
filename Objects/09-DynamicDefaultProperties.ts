// Dynamic Default Properties

// So there's this (seemingly) weird but useful thing that you'll see in the wild:

type FormData={
    [field:string]:string,
    email:string,
    password:string
};

// if  what you're concerned about it which types are allowed in the object, you might wonder why email and password are even
// there. After all you can specify any string key/value pairs in this type, right?

// You use this syntax to require certain properties , in this case , email and password . The type above says:

// The object must have an email and password property, and it can have any number of additional string properties.

// Here's another example :

type FormData={
    [field:string]:string|number|boolean,
    email:string,
    password:string,
    age:number
}

// This type says :
// The object must have an email(string), password(string) and age(number) property, but it can have any number
// of additional string , number , or boolean properties.