function averagePair(arr, avg) {
    // declare two pointer vars
    let p1 = 0; 
    let p2 = 1 ;
    
    // loop while p1 < arr.length-1 && p2 < arr.length
    while ((p1 < arr.length - 1) && (p2 < arr.length)) {
        if ((arr[p1] + arr[p2]) / 2 === avg) {
            return true
        } 
        // console.log ((arr[p1] + arr[p2]) / 2);
        if (p2 === (arr.length -1)) {
            p1 ++
            if ((arr[p1] + arr[p2]) / 2 === avg) {
                return true
            }
            p2 = p1 + 1;
        } 
        p2 ++
    }
    return false
  }

console.log(averagePair([1,2,3], 2.5)); //true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)); //true
console.log(averagePair([-1,0,3,4,5,6], 4.1)); //false
console.log(averagePair([], 4.)); //false