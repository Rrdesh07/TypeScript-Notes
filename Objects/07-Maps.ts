// Maps

// Typescript also has built-in for maps which are collections for key-value pairs. You can specify the types of
// the keys and values using type parameters <k,V>

// A Map with string keys and number values
const podracerSpeeds = new Map<string, number>();

podracerSpeeds.set("Anakin Skywalker", 947);
podracerSpeeds.set("Sebulba", 941);

podracerSpeeds.set("R2-D2", true);
// Error: Argument of type 'true' is not assignable to parameter of type 'number'

podracerSpeeds.set(420, 69);
// Error: Argument of type 'number' is not assignable to parameter of type 'string'

// A map is a "set-like" object, and as such uses the size property instead of length

console.log(podracerSpeeds.size)

// How to easily iterate over a map :
for(const [racer,speed] of podracerSpeeds){
    console.log(`${racer} raced at ${speed} speed`);
}

// Anakin raced at 947 speed
// Sebulba raced at 941 speed

// Here's the most important methods of a map get , delete and has

console.log(podracerSpeeds.get("Sebulba"));
// 941

console.log(podracerSpeeds.has("Sebulba"));
// true

podracerSpeeds.delete("Sebulba");
console.log(podracerSpeeds.get("Sebulba"));
// undefined