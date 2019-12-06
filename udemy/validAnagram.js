// Frequency Counter - validAnagram

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema , formed from iceman 

// Examples:
// validAnagram('', '') => true 
// validAnagram('aaz', 'zza') => false 
// validAnagram('anagram', 'nagaram') => true 
// validAnagram("rat","car") => false) 
// validAnagram('awesome', 'awesom') => false 
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') => false 
// validAnagram('qwerty', 'qeywrt') => true 
// validAnagram('texttwisttime', 'timetwisttext') => true 

// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)


function validAnagram(str1,str2){
    // check if they are the same length 
    if (str1.length !== str2.length){
        // return false if not
        return false 
    };
 
    // checking logic  
    // for loop => O(n2)
    // Frequency counter => O(n)
        
        // set up 2 objects 
        let firstCheck = {};
        let secCheck = {}; 
        //for loop       
        //with counts of each leter as a value 
        // with the letter as the key 
        for (let i = 0; i < str1.length; i++){
        //(check if letter is there if not make 1 || +1) 
            let char = str1[i];
            if (!firstCheck[char]){
                firstCheck[char] = 1;
            }else{
                firstCheck[char] += 1
            }
        }
        
        for (let i = 0; i < str2.length; i++){
        //(check if letter is there if not make 1 || +1) 
            let char = str2[i];
            if (!secCheck[char]){
                secCheck[char] = 1;
            }else{
                secCheck[char] += 1
            }
        }

        

        // for loop over first object looking at keys and 
        for (let i = 0; i < str1.length;i++){
            // check for letter inclution
            let char = str1[i]
            if (!secCheck[char] ){
                // if ! reutrn false 
                return false
            }
            // check for correct frequency  
            if(firstCheck[char] !== secCheck[char]){
                // if ! reutrn false    
                return false
            }
        }
        

    //return true 
    return true
}