import maxPower from "./maxPower.mjs";

const formatAmount = (amount) => {
  // determine order of magnitude
  const orderOfMag = maxPower(amount);

  // inser commas
  let formatted = amount.toFixed(2);
  for (let tensPlace = 1; tensPlace <= orderOfMag; tensPlace++) {
    if (!(tensPlace % 3)) {
      const idx = orderOfMag - tensPlace + 1;
      formatted = formatted.slice(0, idx) + "," + formatted.slice(idx);
    }
  }

  // return string
  return `$${formatted}`;
};

export default formatAmount;
