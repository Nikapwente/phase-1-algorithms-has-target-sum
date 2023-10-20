function hasTargetSum(array, target) {
  // Write your algorithm here
let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length, i !== j; j++) {
      let sum = array[i] + array[j];
      if (target === sum) {
        result.push(array[i],array[j])
      }
    }
  }
  if (result.length === 0) {
    return false
  } else {
    return true
  }
}





/* 
  Write the Big O time complexity of your function here
  O(n**2)
*/

/* 
  if the sum of element of index i plus element of index j in the array equals the target, push the elements to results array where i !== j.
  if results is empty return false.
*/

/*
 iterate through the array with indexes and get the sum each element plus all the other elements.
 if the sum is equal to the target append the elements to results array.
 if results is not empty return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
 
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
