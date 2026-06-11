import "tasksmind/catch";                 // auto-inits from env
function greet(user) { return "Hello, " + user.profile.name; }  // bug: profile may be undefined
setTimeout(() => { console.log(greet({ name: "Sayan" })); }, 400);  // real TypeError, uncaught
