import inquirer from "inquirer";
import { sum, subtract, multiply, division } from "./operators.js";
const question = await inquirer.prompt([
    {
        type: "number",
        name: "number1",
        message: "please enter first number",
    },
    {
        type: "number",
        name: "number2",
        message: "please enter second number",
    },
    {
        type: "list",
        name: "operator",
        message: "please choose the operator",
        choices: ["+", "-", "*", "/"],
    },
]);
if (question.operator == "+") {
    sum(question.number2, question.number2);
}
else if (question.operator == "-") {
    subtract(question.number2, question.number2);
}
else if (question.operator == "*") {
    multiply(question.number2, question.number2);
}
else if (question.operator == "/") {
    division(question.number2, question.number2);
}
else {
    console.log("invalid");
}
