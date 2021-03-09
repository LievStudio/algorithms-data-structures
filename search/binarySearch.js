function binarySearch(arr, val){
    // create iterator variables for the while loop
    let first = 0;
    let last = arr.length -1;
    let middle = Math.floor((first + last) / 2);
    // start while loop
    while (arr[middle] !== val && first <= last) {
        val < arr[middle] ? last = middle - 1 : first = middle + 1;
        middle = Math.floor((first + last) / 2);
    }
    
    return arr[middle]===val ? middle : -1
  // add whatever parameters you deem necessary - good luck!
}

console.log(binarySearch([1,2,3,4,5], 6)) // -1