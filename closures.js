function outerFunction() {
    let outerVariable = "I am outer";

    return function innerFunction() {
        console.log(outerVariable); // Still accessible here
    };
}
const myFunction = outerFunction();
myFunction() // Logs: "I am outer"