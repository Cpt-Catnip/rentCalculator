import formatAmount from "./formatAmount.mjs";

const rent = 2500;
const approxUtilities = 120;
const paycheck = 3174.15; // after taxes

const totalRent = (rent + approxUtilities) * 12;
const salary = paycheck * 2 * 12;

const afterRent = salary - totalRent;

console.log(`Take-home salary after rent: ${formatAmount(afterRent)}`);
