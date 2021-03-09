function validAnagram(str1, str2){
    // add edge case to rule out strings with different lengths
    if (str1.length !== str2.length) {
        return false
    }
    let fcounter1 = {};
    let fcounter2 = {};
    
    for (let letter1 of str1) {
        fcounter1[letter1] = (fcounter1[letter1] || 0) + 1;
    }
    
    for (let letter2 of str2) {
        fcounter2[letter2] = (fcounter2[letter2] || 0) + 1;
    }
    
    for (let letter in fcounter1) {
        if (fcounter1[letter] !== fcounter2[letter]) {
            return false
        }
    }
    return true
  // add whatever parameters you deem necessary - good luck!
}

console.log(validAnagram("","")); // true
console.log(validAnagram("rat","tar")); //true
console.log(validAnagram("bobby","nobby")); //false
console.log(validAnagram("medicare","medirace")); //true