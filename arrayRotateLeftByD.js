// Brute force method
var RotateArrayByDPlace = function(arr, d,n){
    d= d % n;
    console.log(d)
    let tempArr = []
    for(let i = 0 ;i<d; i++ ){
        tempArr.push(arr[i]);
    }
    
    for(let i = d ; i<n; i++){
        arr[i-d] = arr[i];
    }
    
    for (let i = n-d; i<n; i++){
        arr[i] = tempArr[i-(n-d)];
    }
    
    console.log(arr);
}

// optimal approach

var reverse = function(arr, startIndex, endIndex){
    while(startIndex <= endIndex){
        let temp = arr[startIndex];
        arr[startIndex] = arr[endIndex];
        arr[endIndex] = temp;
        startIndex++;
        endIndex--;
    }
}
var RotateArrayByDPlaceOptimal = function(arr, d,n){
  reverse(arr,0, d-1);
  reverse(arr, d, n-1);
  reverse(arr,0,n-1);
  console.log(arr);
}


const arr = [1,2,3,4,5,6,7];
RotateArrayByDPlace(arr, 3,arr.length)
RotateArrayByDPlaceOptimal(arr,3, Array.length)