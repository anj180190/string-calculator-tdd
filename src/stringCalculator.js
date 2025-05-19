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
    const nums = numsPart.split(delimiter).map((n)=>parseInt(n,10));

    //Get the total
    return  nums.reduce((sum,current)=>sum+current,0);
}


module.exports = add;