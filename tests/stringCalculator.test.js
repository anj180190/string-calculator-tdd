const add = require("../src/stringCalculator.js");


test("return 0 given an empty string",()=>{
    expect(add("")).toBe(0);
});
