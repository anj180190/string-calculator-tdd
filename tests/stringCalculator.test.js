const add = require("../src/stringCalculator.js");


test("return 0 given an empty string",()=>{
    expect(add("")).toBe(0);
});

test("return number for a single input",()=>{
    expect(add("5")).toBe(5);
});

test("return sum for two numbers",()=>{
    expect(add("10,30")).toBe(40);
});

test("return sum of muliple comma-sparated numbers",()=>{
    expect(add("10,20,040")).toBe(70);
});

test("return sum when input contains new lines and commas",()=>{
    expect(add("1\n2,3")).toBe(6);
});

test("support custom delimiter using //;\\n syntax", () => {
    expect(add("//|\n1|2")).toBe(3);
});

test("throws if negative number is present", () => {
  expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});

test("ignores numbers greater than 1000",()=>{
    expect(add("2,1001")).toBe(2);
});

test("ignores non numeric values",()=>{
   expect(()=>add("12,f,56,abc,5,-4")).toThrow("Non-numeric values are not allowed: f,abc");
});
 
test("throws with all negative numbers in message", () => {
  expect(() => add("-1,-5,3")).toThrow("Negative numbers not allowed: -1,-5");
});