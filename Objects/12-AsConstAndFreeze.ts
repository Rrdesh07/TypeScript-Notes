// As const and object.freeze

// The as const assertion creates a readonly type using literal values:

const colorsConst=["red","green","blue"] as const;

//Error: Property 'push' does not exist on type 'readonly [red,green,blue]'
colorsConst.push("yellow");

// It works great with objects too, and unlike most utility types and object.freeze() , it automatically makes all nested
// structures readonly as well:

const configConst={
    apiUrl: "https://api.cobrakai.com",
    admins:{
        johny:"lawrenece",
        daniel:"larusso"
    },
    features :["no mercy","not crying","winning too much"]
} as const

// Error: Cannot assign to 'apiUrl' because it is a read-only property
configConst.apiUrl = "https://api.karate.com";

// Error: Cannot assign to 'johnny' because it is a read-only property
configConst.admins.johnny = "larusso";

// Error: Property 'push' does not exist on type 'readonly ["no mercy", "not crying", "winning too much"]'
configConst.features.push("sweep the leg");

// Object.freeze()
// The Object.freeze() method is built-in javascript function that prevents modifications to the top level of an
// object at runtime. It makes the object immutable, but it does not affect Typescript's type system.

const frozenConfig = Object.freeze({
    apiUrl: "https://api.cobrakai.com",
    admins: {
        johnny: "lawrence",
        daniel: "larusso",
    },
    features: ["no mercy", "not crying", "winning too much"],
});

// Error: Cannot assign to 'apiUrl' because it is a read-only property
frozenConfig.apiUrl = "https://api.karate.com";

// This is fine because nested properties are not frozen automatically
frozenConfig.admins.johnny = "kreese";

// This is also fine because the array is not frozen
frozenConfig.features.push("sweep the leg");

// TypeScript is smart enough to recognize that object.freeze is being called, so it gives us a nice
// compile-time error when we try to modify the top-level properties.
// And because Object.freeze() is a runtime operation, it will still fail at runtime if mutation
// actually happens. It's worth mentioning that in non-strict mode Js , mutations of a frozen objects
// are silently ignored but in strict mode throw a TypeError.