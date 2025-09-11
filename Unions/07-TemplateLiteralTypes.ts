//Template Literal Types

// This is one of the more unhinged features of Typescript (at least in my opinion)
// but it is really cool and insanely powerful when you find a good use case for it.

// Remember literal types and type unions?
type Class="wizard"|"Warrior"|"rogue"

// well you can also create literal types using string templates
type Hero=`elf ${Class}`

// The type of Class expands automatically to the possible values, so the above is the same as :
// type Hero = "elf wizard"| "elf Warrior"|"elf rogue"

// You can also get crazy and combine all the combinations of two types:
type Class="wizard"|"Warrior"|"rogue";
type Race="elf"|"human"|"dwarf";
type Hero=`Hero: ${Race} ${Class}`;
// Hero: elf wizard | Hero: elf warrior | Hero: elf rogue | Hero: human wizard | Hero: human warrior | Hero: human rogue | Hero: dwarf wizard | Hero: dwarf warrior | Hero: dwarf rogue

// You can also create types that enforce a simple pattern match.For example
type logRecord = `${string}: ${number}`;

// this is valid because it's a string followed by a colon and a number
const criticalErr: logRecord = "CRITICAL: 69";

// these are all invalid
const criticalErr: logRecord = "CRITICAL 92";
const criticalErr: logRecord = "CRITICAL: 92a";
const criticalErr: logRecord = "92: CRITICAL";

