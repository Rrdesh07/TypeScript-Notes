// TypeInference

// If your words-per-minute are as pitful as mine , you'll agree when i say "typing sucks"
// and objectively this:

const bootupLog:string="Starting bootup logs....";

// is more typing than this :

const bootUpLog="Starting bootup logs...";

// The good news is that TypeScript is incredible at type inference.
// Instead of explicitly declaring the type of a variable,
// TypeScript will infer it based on the value. So in reality, you should never write:

const bootUpLogMessage:string="Starting bootup logs...";

// just write:

const bootupLogMessage="Starting bootup logs...";

//it's just as safe(in fact, safer because you can't screw it up) and much less typing.
