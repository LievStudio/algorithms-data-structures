function FindIntersection(strArr) {
    // can values in each subarray be repeated?
    // separate into two arrays the single array
    const lists = strArr.map(str => str.split(', '));
    const list1 = lists[0];
    const list2 = lists[1];
  
    let numMap = {};
    let result = [];
  
    list1.forEach(num => numMap[num] = true);
  
    list2.forEach( num => {
      if (numMap[num]) {
        result.push(num);
      }
    });
  
    return result.length > 0 ? result.join(',') : 'false';
  }
  
  // keep this function call here 
//   console.log(FindIntersection(readline()));