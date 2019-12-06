// Multiple Pointers - countUniqueValuesImplement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
// countUniqueValues([1,1,1,1,1,2]) => 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) => 7
// countUniqueValues([]) => 0
// countUniqueValues([-2,-1,-1,0,1]) => 4

// Time Complexity - O(n)

// Space Complexity - O(n)

// Bonus

// You must do this with constant or O(1) space and O(n) time.


function countUniqueValues(array){
    // base case of empty array 
    if (!array.length){
        // return 0
        return 0
    }
        
    // have a count of uniqe nums 
    let count = 1;
    // setup 2 pointers
    let pointer1 = 0;
    let pointer2 = 1;
    // logic for incermenting 
    // loop till end of array = sec pointer 
    while(pointer2 < array.length){
        // check for equalty of 2 pointers
        if (array[pointer1] === array[pointer2]){
            // if incerment sec pointer 
            pointer2 += 1;
            
        }else{
            // else incerment count / sec pointer and change first pointer  to new index
            count += 1;
            pointer1 = pointer2;
            pointer2 += 1;
        }
    }
    // return count
    return count 
}