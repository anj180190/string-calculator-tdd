const add = require("../src/stringCalculator");


test("return 0 given an empty string",()=>{

    expect(add("")).toBe(0);

});
