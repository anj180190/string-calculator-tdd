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
    expect(add("//*\n1*2")).toBe(3);
});
