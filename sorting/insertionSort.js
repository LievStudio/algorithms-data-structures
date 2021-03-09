const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        // very important note, so you don't need to define a new variable, use var instead of let to define j
        // because of variable scope, let won't be there out of the inner for loop
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            console.log(`
            swap ${arr[j+1]} with ${arr[j]}
        `)
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
        console.log(`currentVal found its spot, inserting ${currentVal} into ${arr}`);
    }
    return arr
}

// console.log(insertionSort([4,67,44,578,56,55,34,42,21,28,19,43,88,92,160,59,9,3,469,583,1003,1230,32,24,51,63,72,80,99,104,3008]));
console.log(insertionSort([4,67,44,578,56,55,34]));