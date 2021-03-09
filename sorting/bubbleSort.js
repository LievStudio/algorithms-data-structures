const bubbleSort = (arr) => {
    let noSwap;
    for (let i = arr.length; i > 0 ; i--) {
        noSwap = true;
        for (let j = 0; j < (i - 1); j++) {
            console.log(`${arr} comparing arr[j]=${arr[j]} against arr[j+1]=${arr[j+1]}`)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                noSwap = false;
            }
        }
        console.log(`
            ONE PASS COMPLETE
        `)
        if (noSwap) break;
    }
    return arr;
}

console.log(bubbleSort([4,67,44,578,56,55,34,42,21,28,19,43,88,92,160,59,9,3,469,583,1003,1230,32,24,51,63,72,80,99,104,3008]));