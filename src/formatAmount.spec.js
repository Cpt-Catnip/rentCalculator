import test from "ava";
import formatAmount from "./formatAmount.mjs";

test("Adds commas", (t) => {
  t.is(formatAmount(1234.53), "$1,234.53");
  t.is(formatAmount(10000), "$10,000.00");
  t.is(formatAmount(1000000.03), "$1,000,000.03");
  t.is(formatAmount(10000000), "$10,000,000.00");
});

test("Adds a decimal", (t) => {
  t.is(formatAmount(1000), "$1,000.00");
  t.is(formatAmount(1), "$1.00");
});

test("Rounds to the nearest cent", (t) => {
  t.is(formatAmount(1000.118), "$1,000.12");
  t.is(formatAmount(1000.999), "$1,001.00");
});

test.todo("Works on negative numbers");
