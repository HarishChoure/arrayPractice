const arr1  =[1,1,2,3,4,5]
const arr2 = [2,3,4,4,5,6]

const unionOfSortedArray = function(arr1, arr2){
    let p1 = 0;
    let p2 = 0;
    let unionArray = [];
    
    while(p1< arr1.length && p2 < arr2.length){
        if(arr1[p1] <= arr2[p2]){
            if(unionArray.length === 0 || unionArray.at(-1) !== arr1[p1]){
                unionArray.push(arr1[p1])
            }
        p1++;
        }
        
    else {
        if(unionArray.length === 0 || unionArray.at(-1) !== arr2[p2]){
                unionArray.push(arr2[p2])
            }
        p2++;
    }
}

while(p1<arr1.length){
    if(unionArray.length === 0 || unionArray.at(-1) !== arr[p1]){
                unionArray.push()
            }
        p1++;
}

while(p2< arr2.length){
    if(unionArray.length === 0 || unionArray.at(-1) !== arr2[p2]){
                unionArray.push(arr2[p2])
            }
        p2++;
}
console.log(unionArray)
}

unionOfSortedArray(arr1, arr2);
