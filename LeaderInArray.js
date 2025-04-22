// Brute Force Approach , in this we are using nested loop to find leader in right side

// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/description/

//Input: arr = [17,18,5,4,6,1]
//Output: [18,6,6,6,1,-1]

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for(let i = 0; i< arr.length; i++){
    maxValue = -1;
    for(let j = i+1; j<arr.length; j++){
        maxValue = Math.max(maxValue, arr[j]);
        arr[i] = maxValue;
        }
    }

    arr[arr.length-1] = -1;

    return arr;
};


// Optimal Approach, 
// This approach is used to find left side leader value in the  not sorted array 

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

    let maxValue = -1;
    for(let i = arr.length -1; i>=0; i--){
    
    let currentValue = arr[i];
    arr[i] = maxValue;
    maxValue = Math.max(currentValue, maxValue);
}

    return arr;
};
