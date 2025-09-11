 // SuperSet Unions

 // so we know we can drastically narrow a primitive type like "number" by using union of literal types.
 // For example, maybe only 3 error codes are valid.

 type ErrorCodes=200|400|500;

//This works great if these are the only valid error codes, but what if :
 //1. Any number can be used as error code
 //2. 1,2 and 3 are the most common ones

 // Typescript has a way for us to express : super set unions
 type ErrorCode=1|2|3|number;

 // you might be wondering,
 // "why wouldn't i just use number-the set of allowed values are the same?"
 //--> And you're right , but there's one subtle difference.By adding 1|2|3 , Typescript won't change which
 // values are allowed, but it will show those values in your editor's autocomplete.
 // so this trick is incredibly useful if you want to build a great developer experience around your types.