const readlineSync = require("readline-sync");

const annualSalary = (readlineSync.question("Annual salary: "));

const PRE_TAX = 0.07;
const FEDERAL_INCOME_TAX = 0.157;
const STATE_INCOME_TAX = 0.0447;
const SOCAIL_SECURITY_TAX = 0.062;
const MEDICARE_TAX = 0.0145;

let initialSalary = annualSalary / 24;
let firstDeduction = initialSalary - (initialSalary * PRE_TAX);
let secondDeduction = FEDERAL_INCOME_TAX + STATE_INCOME_TAX + SOCAIL_SECURITY_TAX + MEDICARE_TAX;
let thirdDeduction = firstDeduction * secondDeduction
let fourthDeduction = firstDeduction - thirdDeduction

let takeHomePay = fourthDeduction;
takeHomePay = takeHomePay.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYour take-home pay each check will be $" + takeHomePay + ".");
