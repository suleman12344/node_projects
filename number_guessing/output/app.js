import { number } from "@inquirer/prompts";
let guessing_number = Math.floor(Math.random() * (10 - 1) + 1);
let counter = 0;
while (counter < 11) {
    let number_guess;
    if (counter == 0) {
        number_guess = await number({ message: "enter number for guess" });
    }
    else if (counter > 0) {
        number_guess = await number({ message: "enter number for guess again" });
    }
    if (number_guess == guessing_number) {
        console.log("you won......");
        break;
    }
    else if (number_guess < guessing_number) {
        console.log("your guess is lower guess something higher");
    }
    else if (number_guess > guessing_number) {
        console.log("your guess is high guess something lower");
    }
    counter++;
    if (counter === 10) {
        console.log("You lost...");
        break;
    }
}
