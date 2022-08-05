
const fs = require("fs");
process.on('beforeExit', () => { console.log("Print Fifth"); });

//first timer to take blace
setTimeout(() => console.log("Print Third"), 0);

//before event loop begin and after the  next tick is start 
process.nextTick(() => console.log('Print Second'));

console.log('Print First')

fs.readFile(__filename, () => {
    setImmediate(() => console.log("Print Forth"));
});


// setImmediate(() => console.log("Print Forth"));
// it will work without read from file too 