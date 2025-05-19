//escape the delimiter 
function escapeRegExp(str) {
return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// String Calculator
function add(numbers){
    //if number is empty 
    if(numbers==="") return 0;

    let delimiter = /,|\n/; // Default comma and newline
    let numsPart = numbers;

    //Check for custom delimiter at the beginning
    if(numbers.startsWith("//")){
        //Get the index of \n 
        const delimiterLineEnd = numbers.indexOf("\n");
        const rawDelimiter = numbers.substring(2, delimiterLineEnd);
        // Safely escape special regex characters
        const safeDelimiter = escapeRegExp(rawDelimiter);
        //Custom delimiter
        delimiter = new RegExp(safeDelimiter);
        //Get the number part
        numsPart = numbers.substring(delimiterLineEnd+1);
    }
    
    //split numbers + convert the array of string to  array of numbers
    const nums = numsPart.split(delimiter).map((n)=>parseInt(n,10)).filter(n=>!isNaN(n));

    // Find negatives
    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    //filters numbers less than equal 1000
    const validNums = nums.filter(n=> n <= 1000);
   

    //Get the total
    return  validNums.reduce((sum,current)=>sum+current,0);
}


module.exports = add;