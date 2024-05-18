function sum(num1, num2) {
    let result = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} = ${result}`);
}
function subtract(num1, num2) {
    let result = num1 - num2;
    console.log(`The subtraction of ${num1} and ${num2} = ${result}`);
}
function multiply(num1, num2) {
    let result = num1 * num2;
    console.log(`The multiple of ${num1} and ${num2} = ${result}`);
}
function division(num1, num2) {
    let result = num1 / num2;
    console.log(`The division of ${num1} and ${num2} = ${result}`);
}
export { sum, subtract, multiply, division };
