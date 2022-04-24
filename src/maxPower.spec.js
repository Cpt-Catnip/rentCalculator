import test from "ava";
import maxPower from "./maxPower.mjs";

test("Will return the max power of 10 for numbers greater than 0", (t) => {
  t.is(maxPower(1), 0);
  t.is(maxPower(10), 1);
  t.is(maxPower(100), 2);
  t.is(maxPower(1000), 3);
  t.is(maxPower(10000), 4);
});

test("Throws an error for zero", (t) => {
  const error = t.throws(() => maxPower(0), { instanceOf: RangeError });
  t.truthy(error.message);
});

test("Will return power regarldess of digits", (t) => {
  t.is(maxPower(8), 0);
  t.is(maxPower(33), 1);
  t.is(maxPower(196), 2);
  t.is(maxPower(9999), 3);
  t.is(maxPower(57106), 4);
});

test.todo("Will return factor of 10 for numbers less than 1");
