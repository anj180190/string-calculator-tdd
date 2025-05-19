// String Calculator
function add(numbers){
    //if number is empty 
    if(numbers==="") return 0;
    
    //split the string into array
    const parts = numbers.split(",");
   
    //Convert the array of string to  array of numbers
    const nums = parts.map((n)=>parseInt(n));

    //Get the total
    const result = nums.reduce((sum,current)=>sum+current,0);

    return result;
}

module.exports = add;