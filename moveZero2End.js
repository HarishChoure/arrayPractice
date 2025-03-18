const arr = [0,2,0,0,0,4,6,7,0];

var moveZero2End = function(arr) {
    let p1 = 0;
    let p2 = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[p1] !== 0 && arr[p2] !== 0){
            p1++;
            p2++;
            console.log("1",p1,p2)
        }
        else if(arr[i] === 0){
            p2++;
            console.log("2",p1,p2)
        }
        else{
            arr[p1] = arr[p2];
            arr[p2] = 0;
            p1++;
            p2++;
            console.log("3",p1,p2)
        }
    }
    console.log(arr);
}

moveZero2End(arr);
