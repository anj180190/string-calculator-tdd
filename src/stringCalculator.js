// String Calculator
function add(numbers){
    //if number is empty 
    if(numbers==="") return 0;
    
    //split numbers + convert the array of string to  array of numbers
    const nums = numbers.split(",").map((n)=>parseInt(n,10));

    //Get the total
    return  nums.reduce((sum,current)=>sum+current,0);
}

module.exports = add;