const arr1  =[1,1,2,3,4,5]
const arr2 = [2,3,4,4,5,6]

const intersectionOfSortedArray = function(arr1, arr2){
    let p1 = 0;
    let p2 = 0;
    let unionArray = [];
    
    while(p1< arr1.length && p2 < arr2.length){
        if(arr1[p1] === arr2[p2]){
            unionArray.push(p1);
            p1++;
            p2++;
        }
        else if(arr1[p1] < arr2[p2]){
            p1++;
        }
        else {
            p2++
        }
    }
console.log(unionArray)
}

intersectionOfSortedArray(arr1, arr2);
