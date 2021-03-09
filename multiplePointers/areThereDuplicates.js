// function areThereDuplicates(...args) {
//     // treat no args case first
//     // take all arguments passed and turn them into an array
//     const arr = [...args];
//     // declare the first pointer to be used by multiple pointers pattern
//     let p1 = 0;
//     let p2 = 1;
//     // start either a while loop or regular for loop to move pointers accordingly
//     while (p1 < arr.length - 1 && p2 < arr.length) {
//         if (arr[p1] === arr[p2]) {
//             return true;
//         }
//         else if (arr[p1] !== arr[p2]) {
//             // if values are still different evaluate if p2 is at last index of array
//             if (p2 === (arr.length -1)) {
//                 // if so increment p1 to start comparing next value against all others in the array
//                 p1 ++;
//                 if (arr[p1] === arr[p2]) {
//                 // after moving p1 one more to the right make another compare before reassigning p2 its new value    
//                     return true
//                 }
//                 p2 = p1 + 1;
//             }
//             p2 ++;
//         } 
//     }
    
//     // if no pattern was found at the end of the loop, return false
//     return false;
//   // good luck. (supply any arguments you deem necessary.)
// }

function areThereDuplicates (...args) {
    // don't spread the arguments into an array just pass them directly to the Set constructor as "arguments" (javascript reserved word)
    // "arguments" will soon be deprecated and shold not be used 
    return new Set(args).size !== args.length;
  }

console.log(areThereDuplicates(1,2,3)) //false
console.log(areThereDuplicates(1,2,2)) //true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) //true
console.log(areThereDuplicates()) //false