function isSubsequence(str1, str2) {
    // edge case where at least one of the strings is blank or null
    if (!str1.length || !str2.length || str1.length > str2.length) return false;

    let p1 = 0;
    let p2 = 0;
    // loop through both arrays and move pointer if theres a match or not
    while (p2 < str2.length) {
        if (str1[p1] === str2[p2]) {
            console.log(str1[p1]);
            p1++;
        }
        p2++;
    }
    // return if p1 got to be the same value as the first string's length
    return p1 === str1.length;
  }

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); //true
console.log(isSubsequence('abc', 'abracadabra')); //true
console.log(isSubsequence('abc', 'acb')); // false order matters