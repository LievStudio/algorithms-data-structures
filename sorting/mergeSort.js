const merge = (arr1, arr2) => {
    let results = [];
    let a1Index = 0;
    let a2Index = 0;

    while (a1Index < arr1.length && a2Index < arr2.length) {
        if (arr1[a1Index] < arr2[a2Index]) {
            results.push(arr1[a1Index]);
            a1Index++;
        } else {
            results.push(arr2[a2Index]);
            a2Index++;
        }
    }
    while (a1Index < arr1.length) {
        results.push(arr1[a1Index]);
        a1Index++;
    }

    while (a2Index < arr2.length) {
        results.push(arr2[a2Index]);
        a2Index++;
    }
    return results;
}

const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    console.log(left, right);
    return merge(left, right);
}

console.log(mergeSort([10,24,76,73, 670, 55, 4, 23, 32, 46, 57, 5, 61, 70, 88, 94, 1, 86, 568, 1320, 32, 32, 443, 530, 601, 499]));