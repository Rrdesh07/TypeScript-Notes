// Property key

// with dynamic property keys we've only used the string type so far , and most of the time , that's all you need.
//However , javascript also supports number and symbols as property keys. Typescript actually has a built-in type
// called propertyKey that represents all possible property key types

// this is a built-in type
type PropertyKey = string | number | symbol;

// A symbol is a unique end immutable data type that may be used as an object property name.
// It's kinda like a string, but it's guaranteed to be unique.


// So instead of this :

type InfrastructureTags= {
    [key: string]: any;
}

// we can allow number and symbol keys (the Js default) like this :

type InfrastructureTags = {
    [key: PropertyKey]: any;
};

const janesServer: InfrastructureTags = {
    name: "Jane's Server",
    1: 420,
    [Symbol("role")]: "Admin",
};