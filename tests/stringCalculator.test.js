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
})
