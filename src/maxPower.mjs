// this repo is rife with misnomers
const maxPower = (num, power = 0) => {
  if (num === 0) {
    throw new RangeError("Order of magnitude of 0 is not defined");
  }

  const factor = 10 ** power;
  const rem = num / factor;
  if (rem < 1) return power - 1;
  else return maxPower(num, power + 1);
};

export default maxPower;
