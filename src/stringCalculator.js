//escape the delimiter 
function escapeRegExp(str) {
return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// extract delimiter from input
function getDelimiter(input){
    if(!input.startsWith("//")) return /,|\n/;
   
    //Get the index of \n 
    const delimiterLineEnd = input.indexOf("\n");
    const rawDelimiter = input.substring(2, delimiterLineEnd);
    return new RegExp(escapeRegExp(rawDelimiter));
}

// Extract number section from input
function getNumbersSection(input) {
    if (!input.startsWith("//")) return input;

    const delimiterEndIndex = input.indexOf("\n");
    return input.substring(delimiterEndIndex + 1);
}

// Validate that all items are numeric
function validateNonNumericValues(values) {
    const notNumbers = values.filter(n => isNaN(n));
    if (notNumbers.length > 0) {
        throw new Error(`Non-numeric values are not allowed: ${notNumbers.join(",")}`);
    }
}

// Validate no negatives
function validateNegativeNumbers(numbers) {
    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
    }
}

// String Calculator
function add(input){
    if(input==="") return 0;

    const delimiter = getDelimiter(input);
    const numsPart = getNumbersSection(input);
    const rawValues = numsPart.split(delimiter);

    //Find and validate non numeric
    validateNonNumericValues(rawValues);

    //split numbers + convert the array of string to  array of numbers
    const numbers = rawValues.map((n)=>parseInt(n,10)).filter(n=>!isNaN(n));
    
    // Find and validate negatives numbers
    validateNegativeNumbers(numbers);

    //filters numbers less than equal 1000
    const validNumbers = numbers.filter(n=> n <= 1000);

    //Get the total
    return  validNumbers.reduce((sum,current)=>sum+current,0);
}


module.exports = add;