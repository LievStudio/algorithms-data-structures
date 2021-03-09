// pass a memo param with a default value of empty object when the function is called 
// without a memo object being passed
const fib = (num, memo = {}) => {
    // base case that returns 1
    if (num <= 1) return 1;
    // if num key holding a fib(n) result already exists 
    // in hash table/memo object return that and don't recalculate
    if (num in memo) return memo[num];
    // otherwise store the new value of fib(n, memo) with the memo object 
    // so the memo persists in future unknown calls
    
    return memo[num] = fib(num-1, memo) + fib(num-2, memo);
  }
  
  console.log(fib(50));