// Frequency Counter - sameFrequencyWrite a
// function called sameFrequency.Given two positive integers, find out
// if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
//     Time: O(N)
// Sample Input:
// sameFrequency(182, 281) => true
// sameFrequency(34,14) => false
// sameFrequency(3589578, 5879385) => true
// sameFrequency(22,222) => false
    
function sameFrequency(int1, int2){
    // turn the 2 ints into strings 
    let str1 = `${int1}`;
    let str2 = `${int2}`;
    // Compaire digit count of both strings 
    if(str1.length !== str2.length){
        // return false if if differnt
        return false;
    };
    
    // some logic to check false
        // nested for loop => O(n^2)
        // make 2 objects 
        let check1 = {};
        let check2 = {};
        // 2 for loops that make  keys as the numbers and values as the times we have seen it => O(n)
        for(let i = 0 ; i < str1.length; i++ ){
            let current = str1[i];
            // check check1 
            if(!check1[current]){
                // else = 1
                check1[current] = 1;
            }else{
                // if str1 at i then ++
                check1[current] += 1;
            }
            
        };        
        
        for(let i = 0 ; i < str1.length; i++ ){
            let current = str2[i];
            // check check2 
            if(!check2[current]){
                // else = 1
                check2[current] = 1;
            }else{
                // if str2 at i then ++
                check2[current] += 1;
            }
        };
        
        // for loop the 
        for(let i = 0; i < str1.length; i++){
            // check if the number is includes in the oposing key
            let current = str1[i];
            if(!check2[current]){
                return false;
            };
            // check if the values match
            if(check1[current] !== check2[current]){
                return false;            
            };
        }
    
    //   return true
    return true
}
