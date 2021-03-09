function countUniqueValues(arr){
    // declare variables to be used as pointers
    if (!arr.length) {
        return 0;
    }
    if (arr.length === 1) {
        return 1;
    }
    let p1 = 0;
    let p2 = 0;
    // start while loop that iterates over array as long as p2 is less than arr.length
    while (p2 < arr.length) {
        console.log(`p1: ${p1}, p2: ${p2}`);
        if (arr[p1] === arr[p2]) {
            p2++;
        } else {
            p1++;
            arr[p1] = arr[p2];
        }
    }
    return p1 + 1;
  // add whatever parameters you deem necessary - good luck!
}
console.log(countUniqueValues([1,1,1,1,2]));
console.log(countUniqueValues([1,2,2,3,4]));
console.log(countUniqueValues([1,1,1,1,2]));