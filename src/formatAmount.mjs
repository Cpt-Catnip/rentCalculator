import maxPower from "./maxPower.mjs";

const formatAmount = (amount) => {
  // determine order of magnitude
  const orderOfMag = maxPower(amount);

  // number of commas is function of OoM
  const nCommas = Math.floor(orderOfMag / 3);
  console.log(`${amount} gets ${nCommas} comma(s)`);

  // inser commas
  const formatted = amount.toFixed(2);
  const c = formatted.indexOf(".");
  for (let i = c; i >= 0; i -= 3) {
    console.log(i);
  }

  // return string
  return `$${formatted}`;
};

export default formatAmount;
