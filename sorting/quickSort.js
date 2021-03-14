const pivotHelper = (arr, start=0, end=arr.length+1) => {
    // swap helper fn since swapping will happen more than once
    const swap = (array, i, j) => {
        console.log(`swapping ${array[i]} with ${array[j]}`);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp
    }

    let pivot = arr[start]
    let swapIndex = start;

    console.log(`initial array before looping 
        ${arr}
    `)

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            console.log(`new swap index = ${swapIndex}`);
            swap(arr, swapIndex, i)
            console.log(`
            new array after swap

            ${arr}
            `)
        }
    }
    swap(arr, swapIndex, start);
    console.log(`
    new array after swap

    ${arr}

    swap index to return is:`)
    return swapIndex;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        console.log('***************************************');
        console.log(`
        NEW RECURSIVE CALL
        `)
        let pivotIndex = pivotHelper(arr, left, right)
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([4,8,2,1,5,7,6,3]));