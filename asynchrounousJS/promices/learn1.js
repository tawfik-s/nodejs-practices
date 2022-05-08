
let X = 0;

let delay = (duration) => new Promise((resolve, reject) => {
    setTimeout(() => {
        X++;
        if (X == 2000) {
            reject("some thing went rong");
        }
        resolve({ x: X });
    }, duration);
});


delay(300).then((a) => console.log(a)).catch((error) => {
    console.log("need to be replaced");
});


Promise.all([
    delay(500),
    delay(300),
    delay(200)
]).then((value) => console.log(value));



