import { input } from "@inquirer/prompts";
const para = await input({ message: "Enter paragraph" });
console.log(para);
function word_count(para) {
    let words = para.split(" ");
    console.log(`Words without WhiteSpace : ${words.length}`);
}
function count_character(para) {
    let count = 0;
    for (let i = 0; i < para.length; i++) {
        if (para[i] != " ") {
            count++;
        }
    }
    console.log(`Characters : ${count}`);
}
word_count(para);
count_character(para);
