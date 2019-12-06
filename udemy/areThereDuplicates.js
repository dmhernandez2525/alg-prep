// Frequency Counter / Multiple Pointers - areThereDuplicates 
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in .You can solve this 
// using the frequency counter pattern OR the multiple pointers pattern.
// Examples:
// areThereDuplicates(1, 2, 3) => false
// areThereDuplicates(1, 2, 2) => true
// areThereDuplicates('a', 'b', 'c', 'a') => true
// Restrictions:
// Time - O(n)
// Space - O(n)
// Bonus:
    // Time - O(n log n)
// Space - O(1)


function areThereDuplicates(...args) {
    // pull all arguments into an array 
    // check if > 1 
    if (args.length < 2 ){
        return false;
    }
    // do some sort of logic to return true  
        // frequency counter logic
        // create object 
        let counter = {};
        // going through a for loop array.length times 
        for (let i = 0 ;i < args.length;i++){
            // checking if the value for the current index is not undefind 
            let current = args[i];
            if (!counter[current]){
                // else index += 1            
                counter[current] = 1;
            }else{
            // if return true 
                return true;
            }
        }

    
    // return false if we get through logic ^^
    return false;
}



// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}


// areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}