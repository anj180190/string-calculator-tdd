const add = require("../src/stringCalculator.js");


test("return 0 given an empty string",()=>{
    expect(add("")).toBe(0);
});

test("return number for a single input",()=>{
    expect(add("5")).toBe(5);
});


test("return sum for two numbers",()=>{
    expect(add("5,10")).toBe(15);
});
