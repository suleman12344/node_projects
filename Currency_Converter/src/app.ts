//assuming converting PKR to any required Currency
import { input } from "@inquirer/prompts";
import { select } from "@inquirer/prompts";
const currecy = await select({
  message: "select the currency",
  choices: [
    { name: "USD", value: "USD" },
    { name: "EUR", value: "EUR" },
    { name: "Canadian_dollar", value: "Canadian_dollar" },
    { name: "Kuwaiti_Dinar", value: "Kuwaiti_Dinar" },
    { name: "Saudi_Riyal", value: "Saudi_Riyal" },
  ],
});
const amount: any = await input({ message: "Enter the Amount" });

function convert_curreny(curreny: string, amount: number) {
  if (curreny == "USD") {
    amount = amount * 0.0036;
    console.log(`Converted Amount :${amount} $`);
  } else if (curreny == "Euro") {
    amount = amount * 0.0033;
    console.log(`Converted Amount :${amount} €`);
  } else if (currecy == "Canadian_dollar") {
    amount = amount * 0.005;
    console.log(`Converted Amount :${amount} $`);
  } else if (currecy == "Kuwaiti_Dinar") {
    amount = amount * 0.0011;
    console.log(`Converted Amount :${amount} KWD`);
  } else if (currecy == "Saudi_Riyal") {
    amount = amount * 0.013;
    console.log(`Converted Amount :${amount}﷼`);
  }
}
let converted_amount = convert_curreny(currecy, amount);
