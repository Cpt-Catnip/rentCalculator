import maxPower from "./maxPower.mjs";

const formatAmount = (amount) => {
  // determine order of magnitude
  const orderOfMag = maxPower(amount);

  // inser commas
  let formatted = amount.toFixed(2);
  for (let i = orderOfMag - 1; i >= 0; i--) {
    if (!(i % 3)) {
      const idx = i + 1;
      formatted = formatted.slice(0, idx) + "," + formatted.slice(idx);
    }
  }

  // return string
  return `$${formatted}`;
};

export default formatAmount;
